let records = global.records || [];
global.records = records;

export default function handler(req, res) {
  const id = parseInt(req.query.id);
  const { voltage, DG } = req.query;

  const record = records.find(r => r.id === id);
  if (!record) return res.status(404).json({ error: "Not found" });

  if (voltage) record.voltage = voltage;
  if (DG) record.DG = DG;

  res.status(200).json({ message: "Updated", data: record });
}
