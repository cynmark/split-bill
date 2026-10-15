// Fictional display-only fixtures. No persistence or expense calculations in Phase 0.
// A later data service can replace these fixtures when Supabase is introduced.
window.SplitBillDemo = {
  balances: [
    { label: 'Total balance', amount: '+฿1,250.00', detail: 'Looking good — you’re owed overall', tone: 'primary', icon: '↗' },
    { label: 'You are owed', amount: '฿2,450.00', detail: 'Across 2 sample groups', tone: 'success', icon: '↙' },
    { label: 'You owe', amount: '฿1,200.00', detail: 'Across 1 sample group', tone: 'debt', icon: '↗' }
  ],
  groups: [
    { name: 'Weekend in Chiang Mai', category: 'TRAVEL', members: '4 members', icon: '↟', theme: 'lavender', balance: 'You are owed ฿1,800.00', tone: 'success', initials: ['JD', 'AL', 'MK', 'PN'] },
    { name: 'The apartment', category: 'HOME', members: '3 members', icon: '⌂', theme: 'peach', balance: 'You owe ฿1,200.00', tone: 'debt', initials: ['JD', 'AL', 'SK'] },
    { name: 'The dinner club', category: 'FOOD & FRIENDS', members: '5 members', icon: '♨', theme: 'mint', balance: 'You are owed ฿650.00', tone: 'success', initials: ['JD', 'MK', 'PN', '+2'] }
  ],
  activity: [
    { title: 'Dinner at the night market', description: 'Alex paid · Weekend in Chiang Mai', amount: '฿1,280.00', time: '8:45 PM', icon: '♨', theme: 'peach' },
    { title: 'October internet', description: 'You paid · The apartment', amount: '฿690.00', time: '4:20 PM', icon: '⌁', theme: 'lavender' },
    { title: 'Coffee & a catch-up', description: 'Mika paid · The dinner club', amount: '฿450.00', time: '11:30 AM', icon: '☕', theme: 'mint' },
    { title: 'A new adventure', description: 'Alex created Weekend in Chiang Mai', amount: '', time: '9:00 AM', icon: '↟', theme: 'lavender' }
  ]
};
