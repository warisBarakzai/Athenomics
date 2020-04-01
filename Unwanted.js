  //ES6 
  async functiononClick = async () => {
    try{        
      this.setState({
        blockNumber:"waiting.."
      });        
      this.setState({
        gasUsed:"waiting..."
      });
      await web3.eth.getTransactionReceipt(this.state.transactionHash, (err, txReceipt)=>{          
        console.log(err,txReceipt);          
        this.setState({
          txReceipt
        });        
      });      
    }
    catch(error){      
      console.log(error);    
    }
  };

render() {
  return (        
    <div className="App">          
      <header className="App-header">            
        <h1>
          Ethereum and IPFS using Infura
        </h1>         
      </header>
    <hr/>
    <grid>          
      <h3> 
      Choose file to send to IPFS 
      </h3>          
      <form onSubmit={this.onSubmit}>            
        <input              
          type = "file"              
          onChange = {this.captureFile}            
        />             
        <Button             
        bsStyle="primary"             
        type="submit">             
          Send it             
        </Button>          
      </form>
    <hr/> 
      <Button onClick = {this.onClick}> 
        Get Transaction Receipt 
      </Button> 
    <hr/>  
    <table bordered responsive>                
    <thead>                  
    <tr>                    
    <th>
    Tx Receipt Category
    </th>                    
    <th> 
    </th>                    
    <th>
      Values
    </th>                  
    </tr>                
    </thead>
    <tbody>                  
    <tr>                    
    <td>
      IPFS Hash stored on Ethereum
    </td>                    
    <td> 
      : 
    </td>                    
    <td>
      {this.state.ipfsHash}
    </td>                  
    </tr>                  
    <tr>                    
    <td>
      Ethereum Contract Address
    </td>                    
    <td>
      : 
    </td>                    
    <td>
      {this.state.ethAddress}
    </td>                  
    </tr>                  
    <tr>                   
    <td>
      Tx # 
    </td>                    
    <td> 
      : 
    </td>                    
    <td>
      {this.state.transactionHash}
    </td>                  
    </tr>                
    </tbody>            
    </table>        
    </grid>     
    </div>      
  );    
}}export default App;



