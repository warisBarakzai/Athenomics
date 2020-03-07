App = {
  web3Provider: null,
  contracts: {},
  account: '0x0',
  hasVoted: false,

  init: function() {
    return App.initWeb3();
  },

  initWeb3: function() {
    // TODO: refactor conditional
    if (typeof web3 !== 'undefined') {
      // If a web3 instance is already provided by Meta Mask.
      App.web3Provider = web3.currentProvider;
      web3 = new Web3(web3.currentProvider);
    } else {
      // Specify default instance if no web3 instance provided
      App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
      web3 = new Web3(App.web3Provider);
    }
    return App.initContract();
  },

  initContract: function() {
    $.getJSON("Athenomics.json", function(Athenomic) {
      // Instantiate a new truffle contract from the artifact
      App.contracts.Athenomics = TruffleContract(Athenomic);
      // Connect provider to interact with contract
      App.contracts.Athenomics.setProvider(App.web3Provider);

      // App.listenForEvents();
      App.render();
      return App.render();
    });
  },

  // Not yet
  // Listen for events emitted from the contract
  // listenForEvents: function() {
  //   App.contracts.Election.deployed().then(function(instance) {
  //     // Restart Chrome if you are unable to receive this event
  //     // This is a known issue with Metamask
  //     // https://github.com/MetaMask/metamask-extension/issues/2393
  //     instance.votedEvent({}, {
  //       fromBlock: 0,
  //       toBlock: 'latest'
  //     }).watch(function(error, event) {
  //       console.log("event triggered", event)
  //       // Reload when a new vote is recorded
  //       App.render();
  //     });
  //   });
  // },

  render: function() {
    var athenomicsInstance;
    var loader = $("#loader");
    var content = $("#content");

    loader.show();
    content.hide();

    // Load account data
    web3.eth.getCoinbase(function(err, account) {
      if (err === null) {
        // Added to work around MetaMask blocking legacy dapps from unsecurely recording
        // account data
        ethereum.enable();
        App.account = account;
        $("#accountAddress").html("Your Account: " + account);
      }
    });

    // Load contract data
    App.contracts.Athenomics.deployed().then(function(instance) {
      athenomicsInstance = instance;
      return athenomicsInstance.pubGenomesCount();
    }).then(function(pubGenomesCount) {
      // finnicky, not changing rn must be changed for genome
      // TODO
      var candidatesResults = $("#candidatesResults");
      candidatesResults.empty();

      var candidatesSelect = $('#candidatesSelect');
      candidatesSelect.empty();

      for (var i = 1; i <= pubGenomesCount; i++) {
        athenomicsInstance.pubGenomes(i).then(function(genome) {
          var id = genome[0];
          var seq = genome[1];
          var add = genome[2];
          var source = genome[3];

          // TODO, will change later
          // Render candidate Result
          var candidateTemplate = "<tr><th>" + id + "</th><td>" + seq + "</td><td>" + add + "</td><td>" + source + "</td></tr>"
          candidatesResults.append(candidateTemplate);

          // Render candidate ballot option
          var candidateOption = "<option value='" + id + "' >" + seq + "</ option>"
          candidatesSelect.append(candidateOption);
        });
      }
      return athenomicsInstance.members(App.account);
    });
    // .then(function(hasVoted) {
    //   // Do not allow a user to vote
    //   if(hasVoted) {
    //     $('form').hide();
    //   }
    //   loader.hide();
    //   content.show();
    // }).catch(function(error) {
    //   console.warn(error);
    // });
  }

  // castVote: function() {
  //   var candidateId = $('#candidatesSelect').val();
  //   App.contracts.Election.deployed().then(function(instance) {
  //     return instance.vote(candidateId, { from: App.account });
  //   }).then(function(result) {
  //     // Wait for votes to update
  //     $("#content").hide();
  //     $("#loader").show();
  //   }).catch(function(err) {
  //     console.error(err);
  //   });
  // }
};
  function loadFileAsText(){
    var fileToLoad = document.getElementById("fileToLoad").files[0];
    const reader = new FileReader();
    reader.onload = function fileReadCompleted(){

      console.log(reader.result);
      var text = reader.result;
      console.log(text);
      document.getElementById("output").innerText = text;

    }
    reader.readAsText(fileToLoad);
  }

$(function() {
  $(window).load(function() {
    App.init();
  });
});