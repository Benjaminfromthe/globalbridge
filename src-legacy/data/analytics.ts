export type MonthlyPoint = {
  month: string
  tourism: number
  trade: number
}

export function generateMonthlyData(months = 12): MonthlyPoint[] {
  const now = new Date()
  const data: MonthlyPoint[] = []
  for (let i = months - 1; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1)
    const month = d.toLocaleString('default', { month: 'short' })
    // mock numbers with some variance
    const tourism = Math.round(800 + Math.random() * 1200 + (months - i) * 20)
    const trade = Math.round(1200 + Math.random() * 2000 + (months - i) * 30)
    data.push({ month, tourism, trade })
  }
  return data
}
