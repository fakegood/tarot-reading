import type { TarotCardData, TarotSuit } from "@/types/tarot";

type MinorCardSeed = {
  name: string;
  meaning: string;
};

const suitAccents: Record<TarotSuit, string> = {
  Wands: "from-amber-200/80 via-orange-300/65 to-rose-200/70",
  Cups: "from-cyan-200/80 via-sky-300/65 to-indigo-200/70",
  Swords: "from-slate-100/80 via-cyan-100/60 to-blue-200/70",
  Pentacles: "from-emerald-200/80 via-lime-200/65 to-amber-100/70",
};

const majorArcana: TarotCardData[] = [
  {
    id: "the-fool",
    name: "The Fool",
    arcana: "Major Arcana",
    accent: "from-sky-300/70 via-cyan-200/50 to-amber-100/70",
    meaning:
      "The Fool points to a fresh beginning shaped by openness, wonder, and instinct. Its shadow is carelessness, naivety, or stepping forward without enough grounding.",
  },
  {
    id: "the-magician",
    name: "The Magician",
    arcana: "Major Arcana",
    accent: "from-amber-200/80 via-yellow-200/65 to-rose-200/70",
    meaning:
      "The Magician speaks of skill, focus, and turning intention into action. Its shadow is manipulation, illusion, or using power without clarity.",
  },
  {
    id: "the-high-priestess",
    name: "The High Priestess",
    arcana: "Major Arcana",
    accent: "from-violet-300/70 via-indigo-400/60 to-slate-200/60",
    meaning:
      "The High Priestess asks you to trust what is felt beneath the surface and listen inwardly. Its shadow is disconnection from intuition or burying important feelings.",
  },
  {
    id: "the-empress",
    name: "The Empress",
    arcana: "Major Arcana",
    accent: "from-rose-200/80 via-pink-300/60 to-amber-100/70",
    meaning:
      "The Empress centers nourishment, creativity, and abundance that wants to grow. Its shadow can show overdependence, overprotection, or emotional overreach.",
  },
  {
    id: "the-emperor",
    name: "The Emperor",
    arcana: "Major Arcana",
    accent: "from-stone-200/75 via-slate-300/60 to-amber-200/65",
    meaning:
      "The Emperor represents structure, authority, and firm direction. Its shadow is rigidity, domination, or control that leaves no room for warmth.",
  },
  {
    id: "the-hierophant",
    name: "The Hierophant",
    arcana: "Major Arcana",
    accent: "from-amber-100/80 via-stone-200/65 to-slate-200/60",
    meaning:
      "The Hierophant points to tradition, shared values, and established wisdom. Its shadow is blind conformity or refusing new ways of understanding.",
  },
  {
    id: "the-lovers",
    name: "The Lovers",
    arcana: "Major Arcana",
    accent: "from-rose-200/80 via-pink-300/60 to-violet-200/70",
    meaning:
      "The Lovers highlight connection, harmony, and choices made from alignment. Its shadow is imbalance, fracture, or relationships moving out of tune.",
  },
  {
    id: "the-chariot",
    name: "The Chariot",
    arcana: "Major Arcana",
    accent: "from-cyan-200/80 via-blue-300/65 to-violet-300/65",
    meaning:
      "The Chariot is momentum directed by will and disciplined focus. Its shadow is scattered effort, aggression, or losing command of the path.",
  },
  {
    id: "strength",
    name: "Strength",
    arcana: "Major Arcana",
    accent: "from-amber-100/80 via-orange-200/65 to-pink-200/65",
    meaning:
      "Strength emphasizes courage softened by compassion and inner steadiness. Its shadow is insecurity, depletion, or doubting your ability to endure.",
  },
  {
    id: "the-hermit",
    name: "The Hermit",
    arcana: "Major Arcana",
    accent: "from-slate-100/75 via-blue-200/60 to-indigo-300/65",
    meaning:
      "The Hermit invites reflection, solitude, and a deeper search for truth. Its shadow is isolation, disorientation, or withdrawing so far that guidance is lost.",
  },
  {
    id: "wheel-of-fortune",
    name: "Wheel of Fortune",
    arcana: "Major Arcana",
    accent: "from-amber-100/80 via-yellow-300/60 to-indigo-300/70",
    meaning:
      "Wheel of Fortune signals turning cycles, changing conditions, and fate in motion. Its shadow is resisting change, grasping for control, or feeling unlucky.",
  },
  {
    id: "justice",
    name: "Justice",
    arcana: "Major Arcana",
    accent: "from-slate-100/80 via-cyan-100/60 to-sky-200/70",
    meaning:
      "Justice asks for honesty, accountability, and clear cause and effect. Its shadow is unfairness, denial, or refusing responsibility for what is true.",
  },
  {
    id: "the-hanged-man",
    name: "The Hanged Man",
    arcana: "Major Arcana",
    accent: "from-cyan-200/75 via-teal-200/60 to-indigo-200/65",
    meaning:
      "The Hanged Man marks surrender, release, and insight through pause. Its shadow is pointless delay, fear of letting go, or sacrifice without meaning.",
  },
  {
    id: "death",
    name: "Death",
    arcana: "Major Arcana",
    accent: "from-slate-200/75 via-violet-300/60 to-rose-200/65",
    meaning:
      "Death speaks of endings that clear the ground for transformation. Its shadow is clinging to what has expired, stagnation, or fear of necessary change.",
  },
  {
    id: "temperance",
    name: "Temperance",
    arcana: "Major Arcana",
    accent: "from-teal-200/70 via-cyan-300/60 to-amber-100/80",
    meaning:
      "Temperance favors moderation, patience, and blending opposing forces well. Its shadow is excess, imbalance, or living too far at either extreme.",
  },
  {
    id: "the-devil",
    name: "The Devil",
    arcana: "Major Arcana",
    accent: "from-rose-300/70 via-orange-300/60 to-violet-300/65",
    meaning:
      "The Devil reveals attachment, temptation, and the seductive pull of the material. Its shadow can also flip into liberation when unhealthy bonds are recognized and released.",
  },
  {
    id: "the-tower",
    name: "The Tower",
    arcana: "Major Arcana",
    accent: "from-amber-100/80 via-orange-300/70 to-rose-300/70",
    meaning:
      "The Tower brings upheaval that cracks false structures apart. Its shadow is dread, delayed collapse, or living in fear of what must break open.",
  },
  {
    id: "the-star",
    name: "The Star",
    arcana: "Major Arcana",
    accent: "from-cyan-300/70 via-blue-300/50 to-violet-200/70",
    meaning:
      "The Star restores hope, faith, and gentle renewal after difficulty. Its shadow is discouragement, loss of trust, or feeling spiritually drained.",
  },
  {
    id: "the-moon",
    name: "The Moon",
    arcana: "Major Arcana",
    accent: "from-indigo-400/70 via-fuchsia-300/40 to-amber-100/60",
    meaning:
      "The Moon points to intuition, dreams, and what lives in uncertainty or illusion. Its shadow is confusion, misreading, or fear feeding the unknown.",
  },
  {
    id: "the-sun",
    name: "The Sun",
    arcana: "Major Arcana",
    accent: "from-amber-200/90 via-orange-300/70 to-rose-200/80",
    meaning:
      "The Sun radiates joy, visibility, and life-affirming success. Its shadow is heaviness, negativity, or feeling cut off from warmth and celebration.",
  },
  {
    id: "judgement",
    name: "Judgement",
    arcana: "Major Arcana",
    accent: "from-cyan-100/80 via-slate-100/65 to-amber-100/70",
    meaning:
      "Judgement calls for awakening, self-reflection, and an honest reckoning. Its shadow is self-criticism, avoidance, or failing to truly see yourself.",
  },
  {
    id: "the-world",
    name: "The World",
    arcana: "Major Arcana",
    accent: "from-emerald-200/75 via-cyan-200/60 to-amber-100/70",
    meaning:
      "The World signifies completion, integration, and a cycle fulfilled. Its shadow is unfinished business, lack of closure, or a story not yet fully resolved.",
  },
];

const wandSeeds: MinorCardSeed[] = [
  { name: "Ace of Wands", meaning: "Ace of Wands brings a spark of inspiration, bold desire, and creative ignition. Its shadow is flat energy, boredom, or difficulty getting started." },
  { name: "Two of Wands", meaning: "Two of Wands is about planning ahead, deciding on direction, and reaching beyond what is familiar. Its shadow is fear of change or strategy that stays too safe." },
  { name: "Three of Wands", meaning: "Three of Wands suggests expansion, momentum, and looking confidently toward what is next. Its shadow is delay, frustration, or blocked progress." },
  { name: "Four of Wands", meaning: "Four of Wands favors celebration, community, and a sense of homecoming. Its shadow is instability at home or a lack of support around you." },
  { name: "Five of Wands", meaning: "Five of Wands highlights competition, friction, and conflicting wills. Its shadow is either avoidant peacekeeping or tension that drains everyone involved." },
  { name: "Six of Wands", meaning: "Six of Wands points to victory, recognition, and public confidence. Its shadow is pride, punishment, or not receiving the acknowledgment you hoped for." },
  { name: "Seven of Wands", meaning: "Seven of Wands asks for perseverance and defending your position. Its shadow is feeling overwhelmed, losing confidence, or wanting to give up." },
  { name: "Eight of Wands", meaning: "Eight of Wands moves quickly with messages, momentum, and fast decisions. Its shadow is panic, impatience, or progress slowing to a crawl." },
  { name: "Nine of Wands", meaning: "Nine of Wands shows grit, resilience, and the will to hold the line. Its shadow is exhaustion, depletion, or questioning whether the struggle is still worth it." },
  { name: "Ten of Wands", meaning: "Ten of Wands carries effort, responsibility, and the weight of what has been taken on. Its shadow is burnout, strain, or refusing to ask for help." },
  { name: "Page of Wands", meaning: "Page of Wands is curious, adventurous, and eager to explore new creative territory. Its shadow is distraction, procrastination, or aimless conflict." },
  { name: "Knight of Wands", meaning: "Knight of Wands charges forward with bold action and daring spirit. Its shadow is impulsiveness, anger, or reckless momentum." },
  { name: "Queen of Wands", meaning: "Queen of Wands embodies warmth, courage, and magnetic confidence. Its shadow is jealousy, insecurity, or self-focus that narrows the heart." },
  { name: "King of Wands", meaning: "King of Wands leads through vision, boldness, and the ability to inspire. Its shadow is overbearing behavior, rash judgment, or goals that outpace reality." },
];

const cupSeeds: MinorCardSeed[] = [
  { name: "Ace of Cups", meaning: "Ace of Cups opens the heart to new feelings, intuition, and spiritual flow. Its shadow is emptiness, blocked emotion, or creativity that cannot move." },
  { name: "Two of Cups", meaning: "Two of Cups centers mutual connection, harmony, and emotional partnership. Its shadow is tension, miscommunication, or an uneven bond." },
  { name: "Three of Cups", meaning: "Three of Cups celebrates friendship, shared joy, and community. Its shadow is gossip, overindulgence, or feeling isolated within the group." },
  { name: "Four of Cups", meaning: "Four of Cups reflects contemplation, emotional distance, and a drifting sense of apathy. Its shadow is waking up again to possibility and choosing reengagement." },
  { name: "Five of Cups", meaning: "Five of Cups speaks to grief, disappointment, and the ache of loss. Its shadow is acceptance and the slow return of peace after sorrow." },
  { name: "Six of Cups", meaning: "Six of Cups brings healing through memory, tenderness, and what feels familiar. Its shadow is overattachment to the past or the need to move on independently." },
  { name: "Seven of Cups", meaning: "Seven of Cups offers many dreams, choices, and imagined paths. Its shadow is confusion, distraction, or losing purpose in fantasy." },
  { name: "Eight of Cups", meaning: "Eight of Cups is the quiet decision to walk away from what no longer nourishes. Its shadow is avoidance, fear of loss, or hesitating before change." },
  { name: "Nine of Cups", meaning: "Nine of Cups suggests satisfaction, pleasure, and emotional contentment. Its shadow is smugness or realizing outer comfort has not created inner joy." },
  { name: "Ten of Cups", meaning: "Ten of Cups points to deep fulfillment, harmony, and shared happiness. Its shadow is disharmony at home or dreams of togetherness breaking apart." },
  { name: "Page of Cups", meaning: "Page of Cups brings sweetness, surprise, and emotional openness. Its shadow is insecurity, immaturity, or disappointment that is hard to name." },
  { name: "Knight of Cups", meaning: "Knight of Cups follows feeling, romance, and idealistic devotion. Its shadow is moodiness or disillusionment when reality does not match the dream." },
  { name: "Queen of Cups", meaning: "Queen of Cups offers compassion, calm, and emotional wisdom. Its shadow is dependence, insecurity, or self-sacrifice taken too far." },
  { name: "King of Cups", meaning: "King of Cups balances emotional depth with steadiness and discernment. Its shadow is emotional coldness, poor guidance, or moods ruling the room." },
];

const swordSeeds: MinorCardSeed[] = [
  { name: "Ace of Swords", meaning: "Ace of Swords cuts through confusion with clarity, truth, and breakthrough insight. Its shadow is chaos, harshness, or a mind that turns brutal." },
  { name: "Two of Swords", meaning: "Two of Swords captures stalemate, difficult choices, and suspended decision-making. Its shadow is deeper confusion or feeling there is no good option at all." },
  { name: "Three of Swords", meaning: "Three of Swords names heartbreak, grief, and pain that cannot be glossed over. Its shadow is the beginning of recovery, forgiveness, and release." },
  { name: "Four of Swords", meaning: "Four of Swords asks for rest, restoration, and thoughtful retreat. Its shadow is stress, burnout, or being unable to truly stop." },
  { name: "Five of Swords", meaning: "Five of Swords exposes conflict driven by ego, ambition, or questionable tactics. Its shadow is resentment lingering even as reconciliation becomes possible." },
  { name: "Six of Swords", meaning: "Six of Swords marks transition, departure, and moving beyond what was painful. Its shadow is carrying unresolved baggage or resisting the crossing." },
  { name: "Seven of Swords", meaning: "Seven of Swords deals with strategy, secrecy, and actions taken off to the side. Its shadow is confession, course correction, or deceit circling back." },
  { name: "Eight of Swords", meaning: "Eight of Swords describes entrapment and the prison of a fearful mindset. Its shadow is reclaiming perspective and finding the way out." },
  { name: "Nine of Swords", meaning: "Nine of Swords brings anxiety, mental anguish, and sleepless inner pressure. Its shadow is reaching for help and finding a small opening toward hope." },
  { name: "Ten of Swords", meaning: "Ten of Swords represents collapse, defeat, and the finality of an ending. Its shadow is the stark realization that once the worst arrives, recovery can begin." },
  { name: "Page of Swords", meaning: "Page of Swords is curious, alert, and mentally restless. Its shadow is empty talk, manipulation, or cleverness without integrity." },
  { name: "Knight of Swords", meaning: "Knight of Swords rushes in with conviction, speed, and a need to act on belief. Its shadow is recklessness, volatility, or consequences ignored." },
  { name: "Queen of Swords", meaning: "Queen of Swords values perceptiveness, candor, and intellectual precision. Its shadow is bitterness, cruelty, or truth sharpened into a weapon." },
  { name: "King of Swords", meaning: "King of Swords represents discipline, logic, and principled truth. Its shadow is manipulation, coldness, or authority lacking moral center." },
];

const pentacleSeeds: MinorCardSeed[] = [
  { name: "Ace of Pentacles", meaning: "Ace of Pentacles signals a grounded opportunity, practical promise, or material beginning. Its shadow is a missed chance or poor stewardship of potential." },
  { name: "Two of Pentacles", meaning: "Two of Pentacles juggles priorities, adaptation, and balancing change. Its shadow is overwhelm, disorganization, or losing your footing." },
  { name: "Three of Pentacles", meaning: "Three of Pentacles values teamwork, craftsmanship, and building something through shared effort. Its shadow is disorder, poor collaboration, or group friction." },
  { name: "Four of Pentacles", meaning: "Four of Pentacles seeks security, preservation, and careful holding. Its shadow is stinginess, possessiveness, or fear that hardens into greed." },
  { name: "Five of Pentacles", meaning: "Five of Pentacles reveals hardship, need, and the pain of insecurity. Its shadow is recovery, assistance, and a path back toward improvement." },
  { name: "Six of Pentacles", meaning: "Six of Pentacles focuses on giving, receiving, and the balance of resources. Its shadow is generosity with strings attached or power held over others." },
  { name: "Seven of Pentacles", meaning: "Seven of Pentacles is patient labor, perseverance, and evaluating long-term progress. Its shadow is effort without reward or distraction from what matters." },
  { name: "Eight of Pentacles", meaning: "Eight of Pentacles honors skill, practice, and dedication to the craft. Its shadow is uninspired work, loss of motivation, or going through the motions." },
  { name: "Nine of Pentacles", meaning: "Nine of Pentacles enjoys earned comfort, refinement, and the fruits of steady labor. Its shadow is false success or spending that outruns reality." },
  { name: "Ten of Pentacles", meaning: "Ten of Pentacles points to legacy, stability, and lasting foundations. Its shadow is fragile success or resources that do not hold together." },
  { name: "Page of Pentacles", meaning: "Page of Pentacles brings ambition, study, and a sincere desire to build something real. Its shadow is laziness, greed, or a weak commitment to the path." },
  { name: "Knight of Pentacles", meaning: "Knight of Pentacles moves steadily with responsibility, reliability, and work ethic. Its shadow is stagnation, obsession, or effort that forgets purpose." },
  { name: "Queen of Pentacles", meaning: "Queen of Pentacles is practical, nurturing, and attentive to comfort and security. Its shadow is smothering care, jealousy, or self-centered protectiveness." },
  { name: "King of Pentacles", meaning: "King of Pentacles stands for abundance, security, and wise stewardship of the material world. Its shadow is indulgence, greed, or power rooted only in possession." },
];

function slugify(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function buildMinorArcanaCards(
  suit: TarotSuit,
  cards: MinorCardSeed[]
): TarotCardData[] {
  return cards.map((card) => ({
    id: slugify(card.name),
    name: card.name,
    arcana: "Minor Arcana",
    suit,
    accent: suitAccents[suit],
    meaning: card.meaning,
  }));
}

export const tarotCards: TarotCardData[] = [
  ...majorArcana,
  ...buildMinorArcanaCards("Wands", wandSeeds),
  ...buildMinorArcanaCards("Cups", cupSeeds),
  ...buildMinorArcanaCards("Swords", swordSeeds),
  ...buildMinorArcanaCards("Pentacles", pentacleSeeds),
];
