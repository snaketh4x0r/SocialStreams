import React, { Component } from 'react';
import './App.css';
import Web3 from 'web3';
//ropsten version
//import { uniswap_factory_abi,uniswap_factory,addbookadd,addbookabi,sabadd,sababi,tokenAbi,tokenAdd} from './config'

//matic version
import { uniswap_factory_abi,uniswap_factory,addbookadd,addbookabi,sabadd,sababi,tokenAbi,tokenAdd} from './maticconfig'



class App extends Component {
	

	
	componentWillMount() {
		this.loadBlockchainData()
	}
    
	async loadBlockchainData() {
		const ethereum = window.ethereum
		const web3 = new Web3(Web3.givenProvider)
		const network = await web3.eth.net.getNetworkType()
	    const enabledWeb3= await ethereum.enable()
		this.setState({ web3 })
		const accounts = await web3.eth.getAccounts()
	    this.setState({account: accounts[0] })
		const addcon = new web3.eth.Contract(addbookabi,addbookadd)
		this.setState({ addcon })
		const uni = new web3.eth.Contract(uniswap_factory_abi,uniswap_factory)
		this.setState({ uni })
		const tokeninstance = new web3.eth.Contract(tokenAbi,tokenAdd)
		this.setState({ tokeninstance })
		const sabTok = new web3.eth.Contract(sababi,sabadd)
		this.setState({ sabTok })
		
		const tokenCount = await uni.methods.tokenCount().call()
		this.setState({tokenCount})
	}
	
	constructor(props) {
		super(props)
		this.state = { account: '',
		value:'',
		tokenCount: 0,
		show:'',
		}
		this.handleChange = this.handleChange.bind(this);
        this.handleAlternate2 = this.handleAlternate2.bind(this);
		this.handleAlternate = this.handleAlternate.bind(this);
	}
	
	handleChange(event) {
    this.setState({value: event.target.value});
    }
	
	handleAlternate2 = async(event) => {
	event.preventDefault()
	const x = parseInt("1000")
	const x1 = '1000000000000000000000'
	const result =  await this.state.tokeninstance.methods.approve(this.state.web3.utils.toChecksumAddress(sabadd),this.state.web3.utils.fromWei(x1,"ether")).send({from: this.state.account})
    console.log(result)
	
    }
	
	handleAlternate = async(event) => {
	event.preventDefault()
	const x1 = '100000000000000000000'
	const x2 = '10000000000000000000'
	var x3 = await this.state.web3.eth.getBlockNumber()
	var x4 = await this.state.web3.eth.getBlockNumber()
	x3 = x3 + 10
	x4 = x4 + 30
	const tokenAdd = '0xE074018980AeB2f01c292667f6F93F78ed0faFcd'
	const n2 =  await this.state.addcon.methods.getUserAddress(this.state.value).call({from: this.state.account})
	this.setState({ show : n2 })
	const result1 =   await this.state.sabTok.methods.createStream(this.state.web3.utils.toChecksumAddress(this.state.account),
	this.state.web3.utils.toChecksumAddress(this.state.show),
	this.state.web3.utils.toChecksumAddress(tokenAdd),
	x3,
	x4,
	this.state.web3.utils.fromWei(x1,"ether"),
	this.state.web3.utils.fromWei(x2,"ether")
	).send({from: this.state.account})
    console.log(x3)
	
	
    }

    render() {
		return (
		<div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <a className="navbar-brand col-sm-3 col-md-2 mr-0" target="_blank">Social Streams</a>
      <ul className="navbar-nav px-3">
        <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
          <small><a className="nav-link" href="#"><span id="account"></span></a></small>
        </li>
      </ul>
    </nav>
    <div className="container-fluid">
	<main role="main" className="col-1g-12 d-flex justify-content-center">
          <div id="content">
		  
		  <div id="loader1">
		  <p>Buy Teddy's Time by buying teddy token</p>
		  
	      <iframe
          src="https://snaketh4x0r.github.io/uniswap-frontend/"
          height="660px"
          width="100%"
          id="myId"
          />
            <p>start streaming by typing twitter name</p>
            </div>
            <form>
            <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Type Twitter id..." required />
			<p> </p>
			<button onClick = {this.handleAlternate2.bind(this)} >approve</button>
			<button onClick = {this.handleAlternate.bind(this)} >Stream</button>
			
			<p>      </p>
			<p>Current Token Streaming:{this.state.show}</p>
			</form>
		
			</div>
			</main>
			
    </div>
		</div>
		);
	}
}

export default App;
