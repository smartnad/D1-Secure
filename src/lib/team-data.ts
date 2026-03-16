/**
 * Team Member Data
 * ─────────────────────────────────────────────────────────
 * Source: C:\Users\Asus\Documents\d1 team real data
 *
 * Each member's name and role are extracted from the source
 * folder's file naming convention: "Name_Role.jpg"
 *
 * Images stored in: /public/team-images/
 * ─────────────────────────────────────────────────────────
 */

export interface TeamMember {
  name: string
  role: string
  image: string
  initials: string
}

export const teamMembers: TeamMember[] = [
  {
    name: "Dildar Hussain",
    role: "Chief Executive Officer",
    image: "/team-images/dildar-hussain.jpg",
    initials: "DH",
  },
  {
    name: "Tahira Mamtaz",
    role: "Director",
    image: "/team-images/tahira-mamtaz.jpg",
    initials: "TM",
  },
  {
    name: "Madhusmita Rabha",
    role: "Admin Manager",
    image: "/team-images/madhusmita-rabha.jpg",
    initials: "MR",
  },
  {
    name: "Sanjib Thapa",
    role: "Operations Manager",
    image: "/team-images/sanjib-thapa.jpg",
    initials: "ST",
  },
  {
    name: "Dhanalakshmi",
    role: "Officer Assistant",
    image: "/team-images/dhanalakshmi.jpg",
    initials: "DL",
  },
  {
    name: "Suman Nath",
    role: "Field Officer",
    image: "/team-images/suman-nath.jpg",
    initials: "SN",
  },
]
