const fs = require("fs");

const getAllProducts = async (req, res, next) => {
    
    fs.readFile("D:/centeuno-assignment/item_list.json", 'utf8', (err, data) => {
        if(err) {
            console.log(err);
            res.status(500).send("Error Reading the file", err);
        }
        else {
            try {
                const { size = 10, page = 1 } = req.query;
                const parsedPageOffest = parseInt(page, 10);
                const parsedSize = parseInt(size, 10);
                
                // calculating the startIndex and endIndex according to page and size query params.
                const startIndex = (parsedPageOffest - 1) * parsedSize;
                const endIndex = (parsedSize) * (parsedPageOffest); 

                const jsonData = JSON.parse(data);

                // only return data from startIndex to endIndex
                const completeData = jsonData.slice(startIndex, endIndex);

                // filtering only selected fields
                const filteredData = completeData.map(({id, item_name, item_image, item_price}) => ({
                    id,
                    item_name,
                    item_image,
                    item_price
                }));

                res.status(200).json({
                    message: "Success",
                    Response: filteredData
                })
                
            }
            catch (err) {
                console.log(err);
                res.status(404).json({
                    message: "Fail",
                    Response: "Data not found!!"
                })
            }
        }
    })
}

const getProductByID = async (req, res, next) => {
    
    fs.readFile("D:/centeuno-assignment/item_list.json", 'utf8', (err, data) => {
        if(err) {
            console.log(err);
            res.status(500).send("Error Reading the file", err);
        }
        else {
            try {
                const { id } = req.params;
                const jsonData = JSON.parse(data);
                
                // filtering data based on the ${id}
                const filteredData = jsonData.filter((product) => product.id === Number(id));

                res.status(200).json({
                    message: "Success",
                    Response: filteredData
                })
                
            }
            catch (err) {
                console.log(err);
                res.status(404).json({
                    message: "Fail",
                    Response: "Data not found!!"
                })
            }
        }
    })
}

module.exports = {
    getProductByID,
    getAllProducts
}