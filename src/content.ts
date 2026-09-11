export const CONTACT_EMAIL = 'hello@example.com'

export const site = {
  name: 'FitCore',
  tagline: 'Fitness operations software',
  hero: {
    headline: 'Run the gym from one workspace',
    subhead:
      'Members, staff, memberships, schedules, and your house rules — one platform for growing training businesses that need operations they can trust.',
    ctaPrimary: 'Request access',
    ctaSecondary: 'See the product',
  },
  productTabs: [
    { id: 'owner', label: 'Owner' },
    { id: 'staff', label: 'Staff' },
    { id: 'member', label: 'Member' },
  ] as const,
  dayOne: {
    title: 'Everything your team needs',
    subtitle:
      'One system for the front desk, the coaches, and the people who walk through the door.',
    items: [
      {
        title: 'Member directory',
        description:
          'Every client in one place — profiles, status, and history your team can actually use.',
      },
      {
        title: 'Staff & coaches',
        description:
          'Give coaches and front-desk staff their own tools, without sharing the owner console.',
      },
      {
        title: 'Business overview',
        description:
          'See what matters today: people, memberships, and the pulse of the floor.',
      },
      {
        title: 'Member experience',
        description:
          'Members see their plan, book sessions, and check in — without calling the desk.',
      },
      {
        title: 'Coach workspace',
        description:
          'Schedules, roster, and check-ins shaped for the people running the session.',
      },
      {
        title: 'Your house rules',
        description:
          'Cancellation windows, package expiry, and policies that match how you already operate.',
      },
    ],
  },
  deepFeatures: [
    {
      eyebrow: 'People',
      title: 'Members and staff, under control',
      body: 'Onboard clients and coaches into the right experience. Everyone sees what they need — owners run the business, staff run the day, members stay engaged.',
    },
    {
      eyebrow: 'Memberships',
      title: 'Plans that power the door',
      body: 'Define what you sell, assign it to members, and keep status live. Front desk and coaches know who is allowed in — without a spreadsheet.',
    },
    {
      eyebrow: 'Operations',
      title: 'Schedule and check-in, connected',
      body: 'Bookings, attendance, and membership status work together so the floor stays calm when you grow.',
    },
  ],
  demo: {
    title: 'See FitCore in motion',
    body: 'Watch a short walkthrough of the owner workspace, coach tools, and member experience.',
    cta: 'Request a live walkthrough',
  },
  access: {
    title: 'How you get started',
    subtitle: 'We onboard each gym with you — so the workspace matches how you actually run.',
    steps: [
      {
        n: '01',
        title: 'Share how you operate',
        body: 'Team size, memberships, scheduling, and the policies that matter on the floor.',
      },
      {
        n: '02',
        title: 'Your workspace goes live',
        body: 'We stand up FitCore for your gym and walk you through the owner console.',
      },
      {
        n: '03',
        title: 'Bring in your team and members',
        body: 'Invite coaches and clients. They join their own spaces and start using the product.',
      },
    ],
  },
  faq: [
    {
      q: 'How do I get FitCore?',
      a: 'Request access and we set up your gym workspace with you. You invite your staff and members from inside the product.',
    },
    {
      q: 'What does it cost?',
      a: 'Pricing depends on how you run — team size and setup. Ask and we will give you a clear number for your gym.',
    },
    {
      q: 'Who uses what?',
      a: 'Owners manage the business. Staff run day-to-day operations. Members manage their membership, bookings, and visits in their own app experience.',
    },
    {
      q: 'Is this another generic gym app?',
      a: 'No. FitCore is built for operations that fit your rules — packages, cancellations, and coach workflows — not a one-size template you have to fight.',
    },
  ],
  cta: {
    title: 'Bring your operations into one workspace',
    body: 'Tell us how you run today. If FitCore is a fit, we get your gym live with you.',
    button: 'Request access',
  },
  footer: 'FitCore · Fitness operations for growing companies',
}

export const strategy = {
  keyBenefit:
    'Operational software for growing fitness companies — members, staff, memberships, and floor ops in one product.',
  customers:
    'Small / growing PT, coaching, and related fitness operators who need better software than sheets or rigid generic apps.',
  whatTheyWant:
    'A finished-feeling operations platform: people, memberships, scheduling, check-ins, and policies that match reality.',
  whereToFindThem:
    'Operators frustrated with WhatsApp/sheets or inflexible gym software; industry networks; warm intros.',
  howToTalkToday:
    'Landing speaks like the product is complete. Sales still starts with request access and assisted onboarding.',
  primarySegments: [
    'Knows they need software (still mostly manual)',
    'Uses generic software lacking personalization / completion',
  ],
  deprioritized: [
    'Does not yet know they need software (education-heavy)',
    'Has personalized software and wants a full switch (higher proof bar)',
  ],
}
