const { Name } = require('../model/name')
const multer = require('multer')
const ExcelJS = require('exceljs')

const storage = multer.memoryStorage();
const upload = multer({ storage });

const add = async (req, res) => {
    try {
        if (req.file == undefined) {
            let data = {
                name: req.body.name,
                role: req.body.role
            }
            const add = await Name.create(data)
            return res.status(200).send(add)
        } else {
            const fileBuffer = req.file.buffer;
            const workbook = new ExcelJS.Workbook();
            await workbook.xlsx.load(fileBuffer);
            const worksheet = workbook.worksheets[0]
            const rows = worksheet.getSheetValues();
            const headerRow = rows[0];
            const dataRows = rows.slice(1);
            dataRows.shift()
            dataRows.map(async (dataObj) => {
                let data = {
                    name: dataObj[1],
                    role: dataObj[2]
                }
                const add = await Name.create(data)
            })
            return res.status(200).json({ Message: "Created!" })
        }
    } catch (error) {
        console.log(error);
    }
}

const getAll = async (req, res) => {
    try {
        const getAll = await Name.find({})
        return res.status(200).send(getAll)
    } catch (error) {
        console.log(error);
    }
}

const getOne = async (req, res) => {
    try {
        let id = req.params.id
        const getOne = await Name.findById({ _id: id })
        return res.status(200).send(getOne)
    } catch (error) {
        console.log(error);
    }
}

const update = async (req, res) => {
    try {
        let id = req.params.id
        let data = {
            name: req.body.name,
            role: req.body.role
        }
        const update = await Name.updateOne({ _id: id }, { $set: data })
        return res.status(200).json({ Message: "Updated" })
    } catch (error) {
        console.log(error);
    }
}

const deleteOne = async (req, res) => {
    try {
        let id = req.params.id
        const deleteOne = await Name.deleteOne({ _id: id })
        return res.status(200).json({ Message: "Deleted" })
    } catch (error) {
        console.log(error);
    }
}


module.exports = { add, getAll, getOne, update, deleteOne, upload }