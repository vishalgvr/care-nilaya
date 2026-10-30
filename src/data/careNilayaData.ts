export interface ServiceScopeItem {
  id: string;
  category: "checkin" | "reminder" | "request" | "clinical" | "emergency";
  activity: string;
  included: boolean;
  explanation: string;
  note?: string;
}

export const PILOT_CONFIG = {
  brandName: "Care Nilaya",
  tagline: "Care That Connects Families",
  malayalamTagline: "സ്‌നേഹത്തോടെ, കുടുംബത്തിനായി അകലങ്ങളില്ലാതെ",
  pilotCity: "Thrissur City",
  pilotState: "Kerala, India",
  membershipName: "Family Assist",
  priceInr: 999,
  billingPeriod: "per month",
  hours: "Monday – Saturday, 10:00 AM – 6:00 PM IST",
  hoursShort: "Mon–Sat 10:00 AM–6:00 PM IST",
  sunday: "Sunday Closed",
  responseTime: "Within 1 business day",
  emergencyNote: "Not a 24/7 emergency service. Dial 112 or 108 in India.",
  supportEmail: "care@carenilaya.com",
};

export const SCOPE_ITEMS: ServiceScopeItem[] = [
  {
    id: "checkin-weekly",
    category: "checkin",
    activity: "Weekly scheduled non-clinical wellbeing call",
    included: true,
    explanation: "A warm, respectful conversational check-in conducted with parent consent to ask how they are doing and note everyday status.",
  },
  {
    id: "reminders-doctor",
    category: "reminder",
    activity: "Family-provided doctor appointment reminders",
    included: true,
    explanation: "We send gentle reminders before scheduled hospital, clinic, or specialist consultations based on dates supplied by the family.",
  },
  {
    id: "reminders-renewals",
    category: "reminder",
    activity: "Routine prescription renewal reminders",
    included: true,
    explanation: "Reminders to refill family-arranged medicines or book routine follow-ups. We do NOT prescribe, handle, or administer medicines.",
  },
  {
    id: "report-monthly",
    category: "request",
    activity: "Monthly factual family activity digest",
    included: true,
    explanation: "A written summary of completed check-ins, reminders sent, pending tasks, and parent preferences sent to authorised adult children.",
  },
  {
    id: "request-coordination",
    category: "request",
    activity: "One non-clinical coordination request per month",
    included: true,
    explanation: "Assistance organizing a practical family requirement (e.g., verifying a local service address or booking transport assistance).",
  },
  {
    id: "support-whatsapp",
    category: "checkin",
    activity: "WhatsApp coordination during published hours",
    included: true,
    explanation: "Direct messaging with our family coordinator Monday to Saturday between 10:00 AM and 6:00 PM IST.",
  },
  {
    id: "clinical-medical-advice",
    category: "clinical",
    activity: "Medical diagnosis, consultations, or health triage",
    included: false,
    explanation: "Strictly excluded. We are a coordination platform, not qualified medical doctors or clinicians.",
  },
  {
    id: "clinical-home-nursing",
    category: "clinical",
    activity: "In-home nursing, physical therapy, or bedside care",
    included: false,
    explanation: "Strictly excluded. We do not employ or deploy nursing staff or physical home attendants in this digital pilot.",
  },
  {
    id: "clinical-medicine-admin",
    category: "clinical",
    activity: "Medicine administration or handling physical drugs",
    included: false,
    explanation: "Strictly excluded. Families and licensed pharmacies manage all prescriptions and administration directly.",
  },
  {
    id: "emergency-surveillance",
    category: "emergency",
    activity: "24/7 continuous health telemetry or fall monitoring",
    included: false,
    explanation: "Strictly excluded. Care Nilaya does not have 24/7 emergency dispatch centers. Families must dial 112 or 108.",
  },
  {
    id: "emergency-ambulance",
    category: "emergency",
    activity: "Direct emergency rescue or ambulance dispatch",
    included: false,
    explanation: "Strictly excluded. In acute emergencies, parents and families must use local government emergency services (112 / 108).",
  },
];

export const THRISSUR_PILOT_LOCALITIES = [
  "Swaraj Round & Central Thrissur",
  "Punkunnam",
  "Ayyanthole",
  "Ollur",
  "Kuriachira",
  "Cheroor",
  "Kolazhy",
  "Mannuthy",
  "Koorkenchery",
  "Aranattukara",
  "West Fort",
  "East Fort",
  "Chembukkavu",
  "Viyyur",
  "Ramavarmapuram",
  "Patturaikkal",
  "Poothole",
  "Other Thrissur Urban Area",
];

export const FREQUENT_DIASPORA_LOCATIONS = [
  "United Arab Emirates (Dubai, Abu Dhabi, Sharjah)",
  "Saudi Arabia (Riyadh, Jeddah, Dammam)",
  "Qatar (Doha)",
  "Oman (Muscat)",
  "Kuwait & Bahrain",
  "United Kingdom",
  "United States",
  "Canada",
  "Australia & New Zealand",
  "Bengaluru / Bangalore",
  "Mumbai / Pune",
  "Chennai / Hyderabad",
  "Mauritius",
  "Other Global Location",
];

export const BLUEPRINT_FAQS = [
  {
    q: "What exactly is Care Nilaya?",
    a: "Care Nilaya is a digital family-care coordination platform created for Malayali families living outside Kerala whose parents live in Kerala. It provides a simple, structured process to organize non-clinical check-ins, appointment reminders, and family tasks from a distance without making parents feel patronised.",
  },
  {
    q: "Does Care Nilaya provide medical or nursing care?",
    a: "No. Care Nilaya is strictly a non-clinical communication and coordination service. We do not provide medical diagnosis, clinical advice, nursing, caregiver home visits, medicine administration, or emergency response. If a medical situation arises, families must work with qualified healthcare professionals and emergency responders (112 / 108).",
  },
  {
    q: "Why is the pilot currently limited to Thrissur city?",
    a: "We believe in building small, dependable, and thoroughly validated services before expanding. The Thrissur city pilot allows us to maintain strict quality standards, verify local processes, and work closely with our first pilot families before opening to wider Kerala districts.",
  },
  {
    q: "How do you ensure parent dignity and consent?",
    a: "We never initiate service without speaking directly with parents in Malayalam (or their preferred language) to explain what the service does. Check-ins are only conducted if the parent agrees. If a parent ever prefers not to take a call or wishes to pause, their choice is fully respected.",
  },
  {
    q: "What does the Family Assist ₹999/month membership cover?",
    a: "It covers one scheduled non-clinical wellbeing check-in per week, family appointment reminders, one monthly written family summary report, coordination of one non-clinical family request per month, and direct WhatsApp support during business hours (Mon–Sat 10:00 AM – 6:00 PM IST).",
  },
  {
    q: "How does the founder operating model work?",
    a: "The founder manages operations, onboarding, scheduling, communications, and customer care remotely from Mauritius using digital workflows. A trusted local contact in Thrissur handles limited in-person administrative checks and address verifications. No unverified third parties are ever engaged.",
  },
  {
    q: "How do international payments work?",
    a: "Pilot membership is ₹999 per month. Overseas families can pay through standard digital banking or international payment cards once onboarding is confirmed by the founder.",
  },
];
