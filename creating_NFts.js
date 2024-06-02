// Define an array to hold NFTs
const nftCollection = [];

// Function to create an NFT with metadata and add it to the collection
function mintNFT(name, creator, info, dateMade) {
    // Create an NFT object with the provided metadata and push it to the collection
    nftCollection.push({
        name: name,
        creator: creator,
        info: info,
        dateMade: dateMade
    });
}

// Function to print the metadata of all NFTs
function listNFTs() {
    // Loop through each NFT in the collection and print its metadata
    nftCollection.forEach((nft, index) => {
        console.log(`NFT ${index + 1}:`);
        console.log(`  Name: ${nft.name}`);
        console.log(`  Creator: ${nft.creator}`);
        console.log(`  Info: ${nft.info}`);
        console.log(`  Date Made: ${nft.dateMade}`);
    });
}

// Function to print the total number of NFTs
function getTotalSupply() {
    console.log("Total number of NFTs: " + nftCollection.length);
}

// Creating some NFTs
mintNFT("Sunset", "Prakhar", "A beautiful sunset.", "2023-01-01");
mintNFT("Mountain", "Pragya", "A majestic mountain.", "2023-02-15");
mintNFT("Ocean", "Abhisek", "A serene ocean view.", "2023-03-30");

// Print all NFTs
listNFTs();

// Print total number of NFTs
getTotalSupply();
