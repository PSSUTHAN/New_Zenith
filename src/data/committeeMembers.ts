export interface CommitteeMember {
    name: string;
    role: string;
    group: string;
    image: string;
}

export const committeeMembers: CommitteeMember[] = [
    // Principal
    {
        name: "Dr. S. Suresh Kumar",
        role: "Principal",
        group: "Principal",
        image: "/Team/Principal.webp",
    },

    // HOD
    {
        name: "Dr. NirmalaDevi J",
        role: "IT & AIML",
        group: "Head of Department",
        image: "/Team/Dr-Nirmaladevi-J.webp",
    },
    {
        name: "Mr. Joel Anandraj E",
        role: "CYS",
        group: "Head of Department",
        image: "/Team/Mr-Joel-Anandraj-E.webp",
    },

    // Staff Coordinators
    {
        name: "Prof. R.Shirley",
        role: "Department of AIML",
        group: "Staff Coordinators",
        image: "/Team/Ms-Shirley-Josephine-Mary-R.webp",
    },
    {
        name: "Prof. C.Suresh Kumar",
        role: "Department of IT",
        group: "Staff Coordinators",
        image: "/Team/Mr-Sureshkumar-C.webp",
    },
    {
        name: "Prof. R.Kamalakannan",
        role: "Department of CYS",
        group: "Staff Coordinators",
        image: "/Team/Mr-Kamalakkannan-R.webp",
    },
    // Student Coordinators
    {
        name: "K.Parvinkumar",
        role: "Department of IT",
        group: "Student Coordinators",
        image: "/Team/Parvin.png",
    },

    {
        name: "Mega Varshini",
        role: "Department of IT",
        group: "Student Coordinators",
        image: "/Team/mega.png",
    },
   
    {
        name: "S.Sri Vatsan",
        role: "Department of AIML",
        group: "Student Coordinators",
        image: "/Team/Vatsan.png",
    },
    {
        name: "S.Prasanth",
        role: "Department of CYS",
        group: "Student Coordinators",
        image: "/Team/Prasanth.png",
    },
];

// Ordered group labels for display
export const groupOrder = [
    "Principal",
    "Head of Department",
    "Staff Coordinators",
    "Student Coordinators",
];
