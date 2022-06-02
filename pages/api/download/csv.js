import downloadCsv from 'download-csv';

export default function handler(req, res) {

    const data = [
        { name: 'TEST1', score: 1, level: 'Z' },
        { name: 'TEST2', score: 2 },
        { name: 'TEST3', score: 3 },
        { name: 'TEST4', score: 4 },
      ];
       
      const columns = { name: 'TESTE', score: 'TESTE2' };

      const filename = 'TEST'

      console.log(data, columns, filename)

    downloadCsv(data, columns, filename);

    res.status(200).json("download")
  }