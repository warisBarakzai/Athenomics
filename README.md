# Athenomics

# IPFS INSTRUCTIONS:
April 2nd 2020
Basically, the connection is coming into my private IPFS Node - I have to initialize it first.
I can basically configure the node to run 24/7, but that's for later. 

in your .ipfs directory, copy the files in ./Athenomics/.ipfs
It will configure the endpoints of the connecting Node.

In your "config" file, make following changes:

"Addresses": {
    "API": "/ip4/192.168.0.8/tcp/4001",
    "Announce": [],
    "Gateway": "/ip4/192.168.0.8/tcp/8080",
    "NoAnnounce": [],
    "Swarm": [
      "/ip4/0.0.0.0/tcp/4001",
      "/ip6/::/tcp/4001"
    ]
  },
  "Bootstrap": [
    "/ip4/192.168.0.8/tcp/4001/ipfs/QmSRqerk3bUfdMEjGCGBpT1CrDAMhzjA4MewCnYTjvqesJ"
  ],

you can call commands like:
ipfs add <Filename>,
and then call sth like:
ipfs cat QmSRqerk3bUfdMEjGCGBpT1CrDAMhzjA4MewCnYTjvqesJ; - Whatever is in my Private Block