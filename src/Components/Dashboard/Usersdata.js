const initialUsers  = [
  { id: 1, name: "Saim Asif", title: "Senior Developer", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 2, name: "Jane Doe", title: "Senior Developer", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 3, name: "Michael Brown", title: "Project Manager", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 4, name: "Emily White", title: "Designer", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 5, name: "David Wilson", title: "Product Owner", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 6, name: "Sarah Johnson", title: "Scrum Master", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 7, name: "Chris Lee", title: "QA Engineer", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 8, name: "Anna Taylor", title: "Backend Developer", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 9, name: "James Anderson", title: "Frontend Developer", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 10, name: "Olivia Martinez", title: "Data Scientist", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 11, name: "William Garcia", title: "DevOps Engineer", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 12, name: "Sophia Davis", title: "UI/UX Designer", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 13, name: "Alexander Rodriguez", title: "Business Analyst", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 14, name: "Isabella Martinez", title: "Software Architect", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 15, name: "Mason Hernandez", title: "IT Support", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 16, name: "Mia Clark", title: "Database Administrator", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 17, name: "Liam Lewis", title: "Network Engineer", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 18, name: "Ava Walker", title: "System Administrator", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 19, name: "Ethan Young", title: "Security Specialist", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 20, name: "Abigail King", title: "Cloud Engineer", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 21, name: "Noah Wright", title: "Machine Learning", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 22, name: "Ella Scott", title: "AI Specialist", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 23, name: "Benjamin Green", title: "Software Tester", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 24, name: "Charlotte Adams", title: "Technical Writer", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 25, name: "Lucas Baker", title: "Customer Support", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 26, name: "Amelia Gonzalez", title: "Operations Manager", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 27, name: "Henry Nelson", title: "Sales Manager", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 28, name: "Evelyn Carter", title: "Marketing Manager", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 29, name: "Aiden Mitchell", title: "Finance Manager", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 30, name: "Harper Perez", title: "HR Manager", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 31, name: "Jack Roberts", title: "Legal Advisor", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 32, name: "Sofia Turner", title: "Compliance Officer", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 33, name: "Daniel Phillips", title: "Risk Manager", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 34, name: "Layla Campbell", title: "Procurement Manager", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 35, name: "Jacob Parker", title: "Research Scientist", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 36, name: "Madison Evans", title: "Laboratory Technician", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 37, name: "Sebastian Collins", title: "Clinical Researcher", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 38, name: "Aria Stewart", title: "Pharmacologist", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 39, name: "Logan Sanchez", title: "Biomedical Engineer", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 40, name: "Grace Morris", title: "Geneticist", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 41, name: "Carter Rivera", title: "Biochemist", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 42, name: "Zoey Edwards", title: "Microbiologist", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 43, name: "Julian Jenkins", title: "Virologist", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 44, name: "Lily Perry", title: "Immunologist", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 45, name: "Wyatt Powell", title: "Pathologist", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 46, name: "Scarlett Howard", title: "Dermatologist", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 47, name: "Dylan Myers", title: "Designer", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 48, name: "Riley Foster", title: "Orthopedic Surgeon", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 49, name: "Levi Bailey", title: "Neurosurgeon", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" },
  { id: 50, name: "Nora Barnes", title: "Cardiologist", title1:"Cell Text", title2:"Cell Text", title3:"Cell Text", title4:"Cell Text", badgeText: "Badge" }
];

const getUsersFromLocalStorage = () => {
  const users = localStorage.getItem('users');
  return users ? JSON.parse(users) : initialUsers;
};

const saveUsersToLocalStorage = (users) => {
  localStorage.setItem('users', JSON.stringify(users));
};

export { getUsersFromLocalStorage, saveUsersToLocalStorage };