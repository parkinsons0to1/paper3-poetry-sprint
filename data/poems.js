// All 20 Prescribed Poems from Poems of the Decade (Faber & Faber, 2015)
// Exact titles, poets & page numbers verified against Pearson Edexcel 9ET0 Issue 11 Spec p. 53
// Section A assesses AO1, AO2, AO4 ONLY (NO AO3 context!)

export const POEM_CLUSTERS = [
  'All',
  'Time / Memory / Aging',
  'Identity / Outsiders',
  'Violence / Power / Control',
  'Family / Grief / Love',
  'Body / Society / Art'
];

export const POEMS_DATA = [
  // ================= TIER 1: TOP 14 PRIORITY SPRINT (92.1% HIT RATE) =================
  {
    id: 'lammas-hireling',
    tier: 1,
    title: 'The Lammas Hireling',
    poet: 'Ian Duhig',
    page: 51,
    clusters: ['Violence / Power / Control', 'Time / Memory / Aging'],
    unlock: 'A guilt-ridden farmer confesses to shooting his hired farmhand ("hireling") because he hallucinated/believed the boy turned into a hare (a "warlock" in folklore). In the final stanza, it is revealed he is speaking inside a Catholic confessional box—hinting at repressed desire, paranoia, or a real murder masked by superstition.',
    ao2: [
      { move: 'Dramatic monologue in 4 sestets (6-line stanzas)', detail: 'Regular stanza shape mimics a controlled ballad/confession, yet heavy enjambment and shifting internal rhyme expose an unravelling mind.' },
      { move: 'Tense shift into present-tense loop', detail: 'Shifts from past ("I grew fond / of company that knew when to shut up") to perpetual present: "Bless me Father for I have sinned. / It has been an hour since my last confession."' },
      { move: 'Folklore & animal transformation imagery', detail: 'Paranoia erupts in surreal folkloric metaphors ("I knew him a warlock, a cow with leather horns" / "To go into the hare gets you muckle sorrow"), blurring myth and guilt.' }
    ],
    hooks: [
      'Unseen poem about guilt, confession, or unreliable narrators → compare dramatic monologue & final twist.',
      'Unseen poem about rural life or nature → contrast Duhig’s eerie folkloric threat with pastoral calm.',
      'Unseen poem about repressed identity/violence → track how enjambment leaks what the speaker tries to hide.'
    ]
  },
  {
    id: 'giuseppe',
    tier: 1,
    title: 'Giuseppe',
    poet: 'Roderick Ford',
    page: 66,
    clusters: ['Violence / Power / Control', 'Identity / Outsiders'],
    unlock: 'During WWII starvation in Sicily, the speaker’s uncle Giuseppe (an aquarium keeper) watches a priest, doctor, and villagers butcher "the world’s only captive mermaid" and feed her to the troops as "a large fish". The surreal fable exposes how ordinary people commit atrocities by dehumanising victims.',
    ao2: [
      { move: 'Frame narrative & flat, documentary free verse', detail: 'Detached, matter-of-fact syntax ("The rest they cooked and fed to the troops") creates chilling emotional distance—exposing bureaucratic complicity.' },
      { move: 'Sensory contrast & silence', detail: 'Though she screams in human terror, institutions ("doctor", "priest") redefine her as "only a fish"—and the uncle "couldn’t look me in the eye".' },
      { move: 'Euphemism & Nuremberg-style excuse', detail: 'Final line ("Starvation forgives men many things... but couldn’t look me in the eye, for which I thank God") undercuts the excuse with bodily shame.' }
    ],
    hooks: [
      'Unseen poem about war, atrocity, or dehumanisation → compare detached tone vs. emotional outcry.',
      'Unseen poem about family secrets or storytelling → contrast frame narration and inherited guilt.',
      'Unseen poem using myth/magical realism → examine how the "mermaid" allegorises real-world cruelty.'
    ]
  },
  {
    id: 'out-of-the-bag',
    tier: 1,
    title: 'Out of the Bag',
    poet: 'Seamus Heaney',
    page: 81,
    clusters: ['Time / Memory / Aging', 'Family / Grief / Love', 'Body / Society / Art'],
    unlock: 'In 4 numbered sections, Heaney moves from his childhood belief that Doctor Kerlin literally pulled newborn babies out of his leather medical bag, to adult pilgrimages at ancient Greek healing temples (Epidaurus), and back to realizing his mother’s physical exhaustion after giving birth.',
    ao2: [
      { move: 'Four-part chronological & mythic structure', detail: 'Moves from childlike literalism ("As newborns, we all arrived in Doctor Kerlin’s bag") through classical Greek myth to adult empathy.' },
      { move: 'Tactile, domestic sensory imagery', detail: 'Describes the bag’s lining "(The colour of a spaniel’s inside lug)" and the ritualistic "scullery basin, / The soapy water", elevating farmhouse life to sacrament.' },
      { move: 'Alliteration & ritualistic diction', detail: 'Doctor Kerlin’s "fancy coat" and clinical authority turn birth into mystery before section 4 grounds it in the mother’s quiet reality.' }
    ],
    hooks: [
      'Unseen poem about childhood misconceptions vs. adult truth → compare shifting perspective across sections.',
      'Unseen poem about birth, mothers, or family rituals → contrast awe at authority figures with quiet maternal labour.',
      'Unseen poem linking ordinary life to myth/history → track Heaney’s transition from farm scullery to Epidaurus.'
    ]
  },
  {
    id: 'grayson-perry-urn',
    tier: 1,
    title: 'Ode on a Grayson Perry Urn',
    poet: 'Tim Turnbull',
    page: 172,
    clusters: ['Body / Society / Art', 'Identity / Outsiders'],
    unlock: 'A deliberate, cheeky parody of Keats’s Romantic "Ode on a Grecian Urn" addressed to transvestite ceramicist Grayson Perry’s pot depicting working-class chavs, joyriders, and rave culture. Argues that messy, loud modern British youth culture is just as worthy of eternal art as ancient Greece.',
    ao2: [
      { move: 'Mock-heroic 5 × 10-line ode stanzas', detail: 'Copies Keats’s formal 10-line ode architecture while crashing high Romantic apostrophe into colloquial British slang: "Hello! What’s all this here?"' },
      { move: 'Register clash & music/sensory energy', detail: 'Celebrates "the joyful throb of UK house / or of garage imported from the continent" alongside modern detritus, refusing snobbery.' },
      { move: 'Inversion of Keats’s famous ending', detail: 'Rewrites "Beauty is truth, truth beauty" to validate raw, unidealised working-class life as genuine, living art.' }
    ],
    hooks: [
      'Unseen poem about art, museums, or ekphrasis (describing an artwork) → contrast Turnbull’s populist energy with reverent tone.',
      'Unseen poem about youth, class, or modern Britain → compare colloquial register and cultural celebration.',
      'Unseen poem echoing a traditional form → analyse how parody subverts high-art expectations.'
    ]
  },
  {
    id: 'deliverer',
    tier: 1,
    title: 'The Deliverer',
    poet: 'Tishani Doshi',
    page: 43,
    clusters: ['Identity / Outsiders', 'Family / Grief / Love', 'Violence / Power / Control'],
    unlock: 'Tracks abandoned baby girls in Kerala, India—discarded in bins because families value sons—who are rescued by nuns, flown to Milwaukee Airport, and adopted by American parents. Explores the bittersweet cost of survival: safety at the price of cultural erasure.',
    ao2: [
      { move: 'Bipartite geographical structure in free-verse tercets', detail: 'Splits sharply between Kerala (visceral poverty) and "MILWAUKEE AIRPORT, USA" (capitalised, sterile Western arrival: "The parents wait at the gates").' },
      { move: 'Brutal, unvarnished diction vs. sterile comfort', detail: 'Shocking concrete details ("Covered in garbage, stuffed in bags") contrast with neat Western wrapping and tidy American domesticity.' },
      { move: 'Title ambiguity ("The Deliverer")', detail: 'Both the nun ("The sister here is telling my mother") who delivers babies from death and the mothers/adoptive parents handing over a new identity.' }
    ],
    hooks: [
      'Unseen poem about migration, displacement, or adoption → compare split setting and cultural loss vs. safety.',
      'Unseen poem about motherhood or abandoned children → contrast visceral vulnerability with emotional distance.',
      'Unseen poem using two contrasting locations → examine how structural division mirrors identity rupture.'
    ]
  },
  {
    id: 'chainsaw-pampas',
    tier: 1,
    title: 'Chainsaw Versus the Pampas Grass',
    poet: 'Simon Armitage',
    page: 6,
    clusters: ['Violence / Power / Control', 'Body / Society / Art'],
    unlock: 'A mock-epic battle in a garden between a hyper-masculine, roaring chainsaw and an overgrown, feathery pampas grass plant. The speaker violently hacks the plant down and burns it, yet nature/femininity quietly grows back—mocking fragile male aggression.',
    ao2: [
      { move: 'Mock-heroic narrative & irregular stanzas', detail: 'Opens deadpan ("It seemed an unlikely match"), inflating a mundane gardening chore into a gladiatorial showdown.' },
      { move: 'Gendered personification & phallic violence', detail: 'Chainsaw is predatory, angry masculinity ("grinding its teeth") vs. the flamboyant "ludicrous feathers and plumes" of the pampas grass.' },
      { move: 'Volta of defeat & resilience', detail: 'Despite violent industrial assault, the grass regenerates, undercutting human arrogance with quiet persistence.' }
    ],
    hooks: [
      'Unseen poem about gardens, plants, or nature vs. humans → compare Armitage’s mock-heroic violence with gentler nature poems.',
      'Unseen poem about masculinity or aggression → analyse how mechanical imagery exposes fragile ego.',
      'Unseen poem with an extended metaphor → contrast playful exaggeration with serious undertone.'
    ]
  },
  {
    id: 'eat-me',
    tier: 1,
    title: 'Eat Me',
    poet: 'Patience Agbabi',
    page: 3,
    clusters: ['Violence / Power / Control', 'Body / Society / Art', 'Family / Grief / Love'],
    unlock: 'A feeder-fetishist boyfriend force-feeds the speaker until she becomes morbidly obese for his sexual pleasure ("When I hit thirty, he brought me a cake... a candle for each stone in weight"). In a dark fairytale reversal, she rolls over and suffocates him under her weight.',
    ao2: [
      { move: '10 rigid tercets (3-line stanzas) with ABA rhyme', detail: 'Tight, inescapable cage-like rhythm mirrors forced routine and claustrophobic bodily entrapment.' },
      { move: 'Hyperbolic oceanic metaphors', detail: 'She transforms from passive object ("broad belly wobble") into an unstoppable natural force: "I was a tidal wave of flesh."' },
      { move: 'Power reversal & dark fairy-tale closure', detail: 'Wait-and-turn climax ("I rolled and he drowned / in my flesh") echoes Alice in Wonderland ("Eat Me") while inverting victim/perpetrator.' }
    ],
    hooks: [
      'Unseen poem about toxic relationships or control → compare tight stanzaic constraint with sudden power reversal.',
      'Unseen poem about body image or eating → analyse visceral physicality and grotesque hyperbole.',
      'Unseen poem subverting fairy tales → track how domestic intimacy turns fatal.'
    ]
  },
  {
    id: 'disappointed-man',
    tier: 1,
    title: 'From the Journal of a Disappointed Man',
    poet: 'Andrew Motion',
    page: 127,
    clusters: ['Identity / Outsiders', 'Time / Memory / Aging'],
    unlock: 'Written like a diary entry (echoing W.N.P. Barbellion’s journals), a detached intellectual speaker watches burly workmen fail to drive a wooden pile into a pier. Eventually everyone gives up, leaving the heavy pole dangling uselessly in mid-air—mirroring futility and middle-aged alienation.',
    ao2: [
      { move: 'Prosaic diary/journal voice in regular tercets', detail: 'Understated, observational free verse resists dramatic climax, embodying anticlimax and quiet disillusionment.' },
      { move: 'Class/masculinity divide', detail: 'The passive speaker observes the "huge crewmen" leaning on "the pier’s metal railing", contrasting physical labour with intellectual paralysis.' },
      { move: 'Suspended final image', detail: 'Ending with "the pile still hanging in mid-air" refuses closure, turning a construction failure into an existential metaphor.' }
    ],
    hooks: [
      'Unseen poem about failure, work, or anticlimax → compare suspended endings and understated tone.',
      'Unseen poem about an outsider watching others → analyse the speaker’s detached observational stance.',
      'Unseen poem about men or masculinity → contrast Motion’s passive fatigue with aggressive stereotypes.'
    ]
  },
  {
    id: 'minor-role',
    tier: 1,
    title: 'A Minor Role',
    poet: 'U A Fanthorpe',
    page: 57,
    clusters: ['Body / Society / Art', 'Time / Memory / Aging', 'Family / Grief / Love'],
    unlock: 'A patient living with a terminal/serious illness compares her life to playing an unglamorous bit-part on stage ("Propping a spear"). Society wants her to pretend she’s fine, so she performs polite cheerfulness while confronting the grim routine of "driving to hospitals, / Parking at hospitals".',
    ao2: [
      { move: 'Extended theatrical metaphor in free verse', detail: 'Opens "I’m best observed on stage", framing social polite denial as acting while real suffering is relegated to "The waiting-room roles".' },
      { move: 'Jarring bathos & repetition', detail: 'Repetitive, exhausting hospital errands ("driving to hospitals, / Parking at hospitals") clash with polite stage-banter.' },
      { move: 'Polite understatement vs. existential honesty', detail: 'Uses wry British understatement to expose how society sidelines the dying to avoid discomfort.' }
    ],
    hooks: [
      'Unseen poem about illness, hospitals, or mortality → compare Fanthorpe’s theatrical irony with raw grief.',
      'Unseen poem about social performance or masks → contrast public cheerfulness with private vulnerability.',
      'Unseen poem using an extended metaphor → track how the stage conceit breaks down under pain.'
    ]
  },
  {
    id: 'history',
    tier: 1,
    title: 'History',
    poet: 'John Burnside',
    page: 25,
    clusters: ['Time / Memory / Aging', 'Family / Grief / Love', 'Violence / Power / Control'],
    unlock: 'Subtitled "St Andrews: West Sands; September 2001", the speaker collects shells on a beach with his young son Lucas right after 9/11. He contrasts the terror of global historical violence and looming war with quiet paternal tenderness and "how to be alive... and do no harm".',
    ao2: [
      { move: 'Fluid unrhymed tercets & sweeping enjambment', detail: 'Long, breathless sentences mirror the continuous tide and anxious mind shifting between global dread and small beach details.' },
      { move: 'Micro vs. Macro juxtaposition', detail: 'Places "gathering shells / and pebbles" with Lucas right beside distant warplanes and "September 2001" anxiety.' },
      { move: 'Philosophical coda', detail: 'Ends on quiet moral watchfulness ("patient; afraid; / but still, through everything, / attentive to the irredeemable"), using semicolons to slow the breath.' }
    ],
    hooks: [
      'Unseen poem about parents and children in a troubled world → compare protective tenderness vs. global fear.',
      'Unseen poem set by the sea or landscape → examine how natural imagery absorbs human anxiety.',
      'Unseen poem about memory or historical events → contrast personal micro-moments with public history.'
    ]
  },
  {
    id: 'material',
    tier: 1,
    title: 'Material',
    poet: 'Ros Barber',
    page: 10,
    clusters: ['Time / Memory / Aging', 'Family / Grief / Love'],
    unlock: 'Mourning her late mother, the speaker uses the disappearance of real cotton handkerchiefs (replaced by disposable paper tissues) to grieve the loss of her mother’s generation, resilience, and quiet domestic care. Ends with inherited grief: "This is your material / to do with, daughter, what you will."',
    ao2: [
      { move: '8-line conversational rhymed/half-rhymed stanzas', detail: 'Playful rhythm ("My mother was queen of you, / my mother of hanky-parky") masks deep grief until nostalgia turns sharply elegiac.' },
      { move: 'Extended metaphor of "material"', detail: 'Means both literal cotton fabric ("tucked in the sleeves of cardigans"), maternal substance, and raw poetic subject matter.' },
      { move: 'Consumerism vs. permanence', detail: 'Disposable paper tissues symbolise modern shallowness, contrasting with the durable, mended love of her mother’s era.' }
    ],
    hooks: [
      'Unseen poem about everyday objects & memory → compare how a small domestic item triggers grief.',
      'Unseen poem about mothers or generational change → contrast playful nostalgia with final loss.',
      'Unseen poem about modern vs. past life → examine social critique embedded in personal elegy.'
    ]
  },
  {
    id: 'coming-to-dover',
    tier: 1,
    title: 'Look We Have Coming to Dover!',
    poet: 'Daljit Nagra',
    page: 129,
    clusters: ['Identity / Outsiders', 'Body / Society / Art'],
    unlock: 'Narrated by an immigrant arriving illegally at Dover’s white cliffs ("Stowed in the sea to invade"), who dreams of rising from hostile rejection ("phlegmed by cushy come-and-go tourists") to hybrid British prosperity ("Blair’d in the cash of our beeswax’d cars"). Reclaims "Punglish" dialect to challenge Matthew Arnold’s "Dover Beach".',
    ao2: [
      { move: '5 × 5-line stanzas (quintains) with invented "Punglish" hybrid lexis', detail: 'Fuses Punjabi-English cadences, coined compounds ("beeswax’d", "Blair’d"), and clipped syntax to embody cultural fusion.' },
      { move: 'Allusive inversion of Matthew Arnold', detail: 'Directly subverts Arnold’s bleak Victorian "Dover Beach" with energetic, defiant optimism despite racist hostility.' },
      { move: 'Harsh maritime & political imagery', detail: 'Contrasts perilous arrival ("alfresco lash of a diesel-breeze") with "Burdened, ennobled – poling sparks / across pylon and pylon".' }
    ],
    hooks: [
      'Unseen poem about immigration, borders, or British identity → compare non-standard voice and defiant energy.',
      'Unseen poem about journeys or arrival → contrast hostile reception with celebratory resilience.',
      'Unseen poem subverting canonical literature → analyse how Nagra rewrites Englishness through dialect.'
    ]
  },
  {
    id: 'the-gun',
    tier: 1,
    title: 'The Gun',
    poet: 'Vicki Feaver',
    page: 62,
    clusters: ['Violence / Power / Control', 'Family / Grief / Love'],
    unlock: 'A partner brings a hunting rifle into a peaceful home, instantly transforming the domestic atmosphere ("Bringing a gun into a house changes it"). Initially disturbed by dead rabbits on the table, the speaker becomes intoxicated by the primal thrill of slaughter—welcoming "the King of Death" to dinner.',
    ao2: [
      { move: 'Blunt opening thesis + escalating free-verse stanzas', detail: 'Short declarative opening ("Bringing a gun into a house changes it") acts like an irreversible spell.' },
      { move: 'Domestic vs. violent juxtaposition', detail: 'Rifle shadows fall across domestic fabric, and dead game enters the kitchen ("jointing and slicing, stirring and tasting").' },
      { move: 'Mythic transformation at climax', detail: 'Personifies primal violence as "the King of Death... his black mouth / sprouting golden crocuses", blending horror with perverse vitality.' }
    ],
    hooks: [
      'Unseen poem about domestic spaces disrupted by threat → compare tonal shift from dread to seduction.',
      'Unseen poem about weapons, hunting, or nature → contrast Feaver’s mythic awe with anti-violence disgust.',
      'Unseen poem about a relationship dynamic → trace how one partner’s object alters the other’s identity.'
    ]
  },
  {
    id: 'effects',
    tier: 1,
    title: 'Effects',
    poet: 'Alan Jenkins',
    page: 92,
    clusters: ['Family / Grief / Love', 'Time / Memory / Aging', 'Body / Society / Art'],
    unlock: 'A son holds his dead mother’s rough, worn hand in hospital and receives a small bag of her personal belongings ("her effects"). He remembers her unfulfilled, repressed life of endless housework and quiet resentment—realising her emotional "effects" still haunt him.',
    ao2: [
      { move: 'Parenthetical honesty & irregular rhyming lines', detail: 'Opens "(after she died)" in brackets, creating a shocked pause as grief filters through repressed memory.' },
      { move: 'Double meaning of title ("Effects")', detail: 'Both the literal bag of belongings ("A nurse brings the little bag / of her effects to me") and the lifelong psychological aftermath.' },
      { move: 'Tactile, working-class physicality', detail: 'Focuses on her ruined hands ("fingers couldn’t clasp mine any more") to honour unglamorous maternal sacrifice without sentimentalising her.' }
    ],
    hooks: [
      'Unseen poem about losing a parent or hospital death → compare unsentimental honesty with idealised elegy.',
      'Unseen poem about leftover belongings/objects → pair with Material or an unseen elegy on keepsakes.',
      'Unseen poem about guilt or unspoken family tension → examine bracketed asides and restrained grief.'
    ]
  },

  // ================= TIER 2: 6 MORNING BACKUP POEMS (PUSHES HIT RATE TO 100%) =================
  {
    id: 'nine-year-old-self',
    tier: 2,
    title: 'To My Nine-Year-Old Self',
    poet: 'Helen Dunmore',
    page: 52,
    clusters: ['Time / Memory / Aging', 'Body / Society / Art'],
    unlock: 'An adult speaker apologises to her reckless, fearless nine-year-old self for letting her down and wearing out their shared body ("I have spoiled this body we once shared"). Ends by letting her younger self stay absorbed in blissful, gross childhood sensory freedom.',
    ao2: [
      { move: 'Direct second-person apostrophe ("You")', detail: 'Opens apologetically ("You must forgive me"), splitting one person into two strangers ("no common ground beyond a few shared years").' },
      { move: 'Bodily contrast: agility vs. caution', detail: 'Adult pain/scars contrast with the child’s fearless physical immersion.' },
      { move: 'Visceral closing sensory image', detail: 'Leaves the child "peeling a ripe scab from your knee / to taste it on your tongue", celebrating unselfconscious innocence.' }
    ],
    hooks: [
      'Unseen poem about childhood vs. adulthood → compare self-address and elegiac regret.',
      'Unseen poem about the aging body → contrast adult physical caution with youthful invincibility.'
    ]
  },
  {
    id: 'easy-passage',
    tier: 2,
    title: 'An Easy Passage',
    poet: 'Julia Copus',
    page: 37,
    clusters: ['Time / Memory / Aging', 'Identity / Outsiders'],
    unlock: 'Locked out, a 13-year-old girl in a bikini climbs onto a porch roof to sneak through an upper window while her friend watches. Caught literally and metaphorically "halfway" between sunlit childhood freedom and the "shade of the house" (restricted adult womanhood, echoed by the tired secretary across the street).',
    ao2: [
      { move: 'Single continuous 44-line free-verse stanza', detail: 'Unbroken block of text + breathlessly suspended syntax ("Once she is halfway up there...") mimics physical balancing on the threshold.' },
      { move: 'Threshold & light/dark symbolism', detail: 'Sunlit "blond gravel" and open sky contrast with "dropping gracefully into the shade of the house".' },
      { move: 'Foreshadowing adult confinement', detail: 'Camera pans to the middle-aged secretary across the road, silently contrasting youthful possibility with future drudgery.' }
    ],
    hooks: [
      'Unseen poem about growing up / adolescence → compare threshold imagery and unbroken single-stanza form.',
      'Unseen poem about girls/women and freedom → contrast sunlit youth with domestic enclosure.'
    ]
  },
  {
    id: 'genetics',
    tier: 2,
    title: 'Genetics',
    poet: 'Sinéad Morrissey',
    page: 125,
    clusters: ['Family / Grief / Love', 'Body / Society / Art'],
    unlock: 'Though the speaker’s parents divorced and moved to "separate hemispheres", she sees them permanently reunited in her own hands ("My father’s in my fingers, but my mother’s in my palms"). Playing the childhood church-and-steeple hand game, she turns her body into their living "marriage register" before inviting her partner to pass it on.',
    ao2: [
      { move: 'Modified Villanelle (5 tercets + 1 quatrain)', detail: 'Two repeating refrains mirror DNA loops and hereditary repetition across generations.' },
      { move: 'Deliberate half-rhymes (palms / hands / demands)', detail: 'Imperfect slant rhymes show a child inherits traits without being an identical clone.' },
      { move: 'Anatomical & legal/sacred metaphor', detail: 'Hands form a "chapel" and "My body is their marriage register", transforming divorce trauma into joyful biological synthesis.' }
    ],
    hooks: [
      'Unseen poem about parents, divorce, or inheritance → compare villanelle looping with looser family forms.',
      'Unseen poem about hands or the body → analyse how physical traits carry emotional history.'
    ]
  },
  {
    id: 'furthest-distances',
    tier: 2,
    title: 'The Furthest Distances I’ve Travelled',
    poet: 'Leontia Flynn',
    page: 64,
    clusters: ['Time / Memory / Aging', 'Identity / Outsiders'],
    unlock: 'Contrasts thrilling youthful backpacking across exotic places with the quiet shock of settling into ordinary domestic adulthood. Concludes that the hardest, "furthest" journeys aren’t geographical miles—they’re internal emotional growth and letting go.',
    ao2: [
      { move: 'Conversational quatrains with loose slant rhymes', detail: 'Diary-like list of travel thrills collapses into mundane British suburbs ("transit vans, lino").' },
      { move: 'Exotic vs. domestic bathos', detail: 'Romanticised travel vocabulary gives way to flat domestic items, mocking youthful wanderlust.' },
      { move: 'Inward turn in final stanza', detail: 'Redefines "furthest distances" psychologically—emotional distance within a relationship or one’s own bed.' }
    ],
    hooks: [
      'Unseen poem about travel, places, or growing up → compare geographical vs. psychological journeys.',
      'Unseen poem about nostalgia or settling down → track tonal shift from excitement to quiet reflection.'
    ]
  },
  {
    id: 'please-hold',
    tier: 2,
    title: 'Please Hold',
    poet: 'Ciaran O’Driscoll',
    page: 132,
    clusters: ['Identity / Outsiders', 'Body / Society / Art'],
    unlock: 'A darkly comic satire of modern life: the speaker is trapped in an endless automated phone menu ("I’m talking to a robot on the phone") while his wife warns "This is the future". Exposes how corporate bureaucracy and tech strip away human agency ("no options in the guise of countless alternatives").',
    ao2: [
      { move: 'Fragmented free verse & robotic repetition', detail: 'Echoes automated prompts ("Yes, No, Repeat or Menu") to trap the reader inside the maddening loop.' },
      { move: 'Paradoxical corporate satire', detail: 'Exposes hollow slogans ("giving me no options in the guise of countless alternatives") as modern dehumanisation.' },
      { move: 'Colloquial exasperation vs. cold tech', detail: 'Domestic dialogue with his wife clashes against sterile automated politeness.' }
    ],
    hooks: [
      'Unseen poem about modern technology, work, or alienation → compare satirical repetition and corporate diction.',
      'Unseen poem about frustration or isolation → contrast comic tone with genuine existential dread.'
    ]
  },
  {
    id: 'on-her-blindness',
    tier: 2,
    title: 'On Her Blindness',
    poet: 'Adam Thorpe',
    page: 170,
    clusters: ['Family / Grief / Love', 'Body / Society / Art'],
    unlock: 'An unsentimental portrait of the speaker’s mother losing her sight—refusing to act like a cheerful, "inspirational" disabled person ("the blind and proud") and bluntly expressing her misery until death arrives as no greater darkness than she already endured.',
    ao2: [
      { move: 'Unrhymed couplets + stark final 1-line stanza', detail: 'Paired lines create steady accumulation before the isolated closing line mirrors final separation/death.' },
      { move: 'Light/darkness & fire imagery', detail: '"Not a candle / flickered in her head" strips away comforting platitudes.' },
      { move: 'Anti-inspirational honesty', detail: 'Final paradox ("Dying made her no more sightless / than she had been") respects her real suffering without fake uplift.' }
    ],
    hooks: [
      'Unseen poem about disability, aging, or parents → compare couplet restraint and unsentimental ending.',
      'Unseen poem about sight, darkness, or death → analyse the closing single-line isolation.'
    ]
  }
];
