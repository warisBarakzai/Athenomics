pragma solidity ^0.5.16;

contract Athenomics {

	// Create a Genome container
	struct Genome {
		uint index;
		address owner;
		string seq;
		string source_type;
		address[] shared;
		address[] open_requests;
		// 0=rejected, 1=open, 2=accepted
		mapping(address => uint) open_requests_status;
	}

	struct Member {
		address memAddress;
		string institution;
		// values 1=open, 0=rejected, 2=accepted
		mapping(uint => uint) requests;
	}

	// additions to mappings and address arrays changes state of contract.
	// changing state of contract means writing to blockchain
	
	// mapping of publically available genomes to be bid on via id
	// Can be 1 address/multiple genomes
	mapping(uint => Genome) public genomes;
	uint public genomesCount;

	// pubGenomesCount + privGenomesCount == genomesCount;

	// list of addresses of entities that may request genomes
	// Only 1 address/each member
	mapping(address => Member) public members;
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
		Genome memory _genome = Genome(genomesCount, msg.sender, _seq, _source, new address[](0), new address[](0));
		genomes[genomesCount] = _genome;
	}
	// add member to member mapping
	function addMember(string memory _ins) public {
		++membersCount;
		Member memory _member = Member(msg.sender, _ins);
		members[msg.sender] = _member;
	}

	function addRequest(uint genome_owner) public {
		genomes[genome_owner].open_requests.push(msg.sender);
		genomes[genome_owner].open_requests_status[msg.sender] = 1;
		// Create a request in the member requests field
		members[msg.sender].requests[genome_owner] = 1;

	}

	function getGenomeRequests(uint genome_owner) public view returns (address[] memory) {
		return genomes[genome_owner].open_requests;
	}

	function getGenomeRequestStatus(uint genome_owner, address member) public view returns (uint) {
		return genomes[genome_owner].open_requests_status[member];
	}

	function changeRequest(uint genome_index, address member, uint change) public {
		members[member].requests[genome_index] = change;
		genomes[genome_index].open_requests_status[member] = change;
	}

	function getMemberName(address memAddress) public view returns (string memory) {
		return members[memAddress].institution;
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