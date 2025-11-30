let records = global.records || [];
global.records = records;

export default function handler(req, res) {
  const id = parseInt(req.query.id);

  records = records.filter(r => r.id !== id);
  global.records = records;

  res.status(200).json({ message: "Deleted", id });
}
