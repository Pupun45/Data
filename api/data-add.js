let records = global.records || [];
global.records = records;

export default function handler(req, res) {
  const { datetime, voltage, DG } = req.query;

  if (!datetime || !voltage || !DG) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  const newRecord = {
    id: Date.now(),
    datetime,
    voltage,
    DG
  };

  records.push(newRecord);

  res.status(200).json({ message: "Added", data: newRecord });
}
