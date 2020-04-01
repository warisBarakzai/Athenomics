pragma solidity ^0.5.16;

contract Athenomics {

	// Create a Genome container
	struct Genome {
		address owner;
		string seq;
		string source_type;
		address[] shared;
	}

	struct Member {
		uint id;
		string institution;
		address memAddress;
	}

	// additions to mappings and address arrays changes state of contract.
	// changing state of contract means writing to blockchain
	
	// mapping of publically available genomes to be bid on via id
	mapping(uint => Genome) public genomes;
	uint public genomesCount;

	// pubGenomesCount + privGenomesCount == genomesCount;

	// list of addresses of entities that may request genomes
	mapping(uint => Member) public members;
	uint public membersCount;


	// voted event
	// keep for reference
	// event votedEvent (
 //        uint indexed _candidateId
 //    );

	constructor() public {}

	// add genome to genome mapping
	function addGenome(string memory _seq, string memory _source) public {
		++genomesCount;
		Genome memory _genome = Genome(msg.sender, _seq, _source, new address[](0));
		genomes[genomesCount] = _genome;
	}
	// add member to member mapping
	function addMember(string memory _ins) public {
		++membersCount;
		Member memory _member = Member(membersCount, _ins, msg.sender);
		members[membersCount] = _member;
	}

	// Add candidates to candidates mapping
	// function addCandidate(string memory _name) private {
	// 	++candidatesCount;
	// 	candidates[candidatesCount] = Candidate(candidatesCount, _name, 0);
	// }

	// function vote(uint _candidateId) public {
	// 	// check for voted before
	// 	require(!voters[msg.sender]);
	// 	// check for valid candidate
	// 	require(_candidateId > 0 && _candidateId <= candidatesCount); 
	// 	// record that voter has voted
	// 	// metadata that gets passed (msg), account from which function call sent (sender)
	// 	voters[msg.sender] =true;
	// 	// update candidate voteCount
	// 	candidates[_candidateId].voteCount++;
	// }
}