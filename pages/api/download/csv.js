import { Parser } from 'json2csv';

export const downloadResource = (res, fileName, fields, data) => {
  const json2csv = new Parser({ fields });
  const csv = json2csv.parse(data);
  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', 'attachment; filename=dummy.pdf');
  return res.send(csv);
}
export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = [
      { name: 'test1', score: 1 },
      { name: 'test2', score: 2 },
      { name: 'test3', score: 3 },
      { name: 'test4', score: 4 },
      { name: 'test5', score: 5 },
      { name: 'test6', score: 6 },
      { name: 'test7', score: 7 },
    ];
  
    const fields = [{ label: 'Name', value: 'name' },{ label: 'Score', value: 'score' }]
    downloadResource(res, 'test',fields,data)
  } 
  res.send()

  }