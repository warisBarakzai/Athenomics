var Athenomics = artifacts.require("./Athenomics.sol");

contract("Athenomics", function(accounts) {
  var athenomicsInstance;

  // Test 1 - Done
  it("Submitting a genome", function(){
    return Athenomics.deployed().then(function(instance) {
      athenomicsInstance = instance;
      //Create instances of 2 genomes
      sampleSEQ1 = "SEQ1";
      sampleSource1 = "SOURCE1";
      return athenomicsInstance.addGenome(sampleSEQ1, sampleSource1);
    }).then(function(receipt1){ // Check indexes of the first genome
      assert.equal(receipt1.logs.length, 1, "an event was triggered");
      assert.equal(receipt1.logs[0].event, "addGenomeEvent", "the event was a addGenomeEvent");
      assert.equal(receipt1.logs[0].args._seq, sampleSEQ1, "the first genome's seq match");
      assert.equal(receipt1.logs[0].args._source, sampleSource1, "the first genome's source match");
      sampleSEQ2 = "SEQ2";
      sampleSource2 = "SOURCE2";
      return athenomicsInstance.addGenome(sampleSEQ2, sampleSource2);
    }).then(function(receipt2){ // Check indexes of the second genome
      assert.equal(receipt2.logs.length, 1, "another event was triggered");
      assert.equal(receipt2.logs[0].event, "addGenomeEvent", "the event was a addGenomeEvent");
      assert.equal(receipt2.logs[0].args._seq, sampleSEQ2, "the second genome's seq match");
      assert.equal(receipt2.logs[0].args._source, sampleSource2, "the second genome's source match");
    })
  });

  // Test 2 - Done
  it("Signing up as a member institution", function(){
    return Athenomics.deployed().then(function(instance) {
      athenomicsInstance = instance;
      sampleIns = "Ins";
      return athenomicsInstance.addMember(sampleIns);
    }).then(function(receipt){
      assert.equal(receipt.logs.length, 1, "an event was triggered")
      assert.equal(receipt.logs[0].event, "addMemberEvent", "the event was a addMemberEvent");
      assert.equal(receipt.logs[0].args._ins, sampleIns, "the Member's ins match");
    })
  });

  // Test 3
  it("Requesting a genome", function(){
    return Athenomics.deployed().then(function(instance) {
      athenomicsInstance = instance;
      return athenomicsInstance.addRequest(0);
    }).then(function(receipt){
      assert.equal(receipt.logs.length, 1, "an event was triggered");
      assert.equal(receipt.logs[0].event, "addRequestEvent", "the event was a addRequestEvent");
      assert.equal(receipt.logs[0].args._genomeRequestStatus, 2, "the genome's request status is pending");
      assert.equal(receipt.logs[0].args._memberRequestStatus, 2, "the member's request status is pending");
      return athenomicsInstance.addRequest(1);
    }).then(function(receipt){
      assert.equal(receipt.logs.length, 1, "an event was triggered");
      assert.equal(receipt.logs[0].event, "addRequestEvent", "the event was a addRequestEvent");
      assert.equal(receipt.logs[0].args._genomeRequestStatus, 2, "the genome's request status is pending");
      assert.equal(receipt.logs[0].args._memberRequestStatus, 2, "the member's request status is pending");
    })
  });

  /*// Test 4
  it("Accepting/rejecting a request ", function(){
    return Athenomics.deployed().then(function(instance) {
      athenomicsInstance = instance;
      return athenomicsInstance.changeRequest(0, { from: accounts[0] }, 2)
    }).then(function(receipt){
      assert.equal(receipt.logs.length, 1, "an event was triggered");
      assert.equal(receipt.logs[0].event, "changeRequestEvent", "the event was a changeRequestEvent");
      assert.equal(receipt.logs[0].args._requestLength, 0, "The length has decreased from 1 to 0");
    })
  });*/


  // Test 5
  it("Confirming and downloading a request", function(){
    return Athenomics.deployed().then(function(instance) {
      athenomicsInstance = instance;
      return athenomicsInstance.returnSeq(1);
    }).then(function(receipt){
      assert.equal(receipt.logs.length, 1, "an event was triggered");
      assert.equal(receipt.logs[0].event, "returnSequenceEvent", "the event was a returnSequenceEvent");
      assert.equal(receipt.logs[0].args._seq, "SEQ1", "the returned Sequence Matches the initial sequence");
      return athenomicsInstance.returnSeq(2);
    }).then(function(receipt){
      assert.equal(receipt.logs.length, 1, "an event was triggered");
      assert.equal(receipt.logs[0].event, "returnSequenceEvent", "the event was a returnSequenceEvent");
      assert.equal(receipt.logs[0].args._seq, "SEQ2", "the returned Sequence Matches the initial sequence");
    })
  });
});