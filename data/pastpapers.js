// Verified Edexcel 9ET0/03 Past Paper Pattern Matcher (2017–2025)
// Section B: 14 Chaucer questions; Section A: 6 Unseen + Poems of the Decade Blueprints

export const CHAUCER_PAST_QUESTIONS = [
  {
    id: 'q-2025-teacher',
    year: 'June 2025',
    theme: 'Wife as a Teacher',
    prompt: 'Explore the ways in which Chaucer presents the Wife as a teacher in The Wife of Bath’s Prologue and Tale, by referring to lines 257–292 and one other extract of similar length.',
    printedExtractSummary: 'Prologue ll. 257–292: Alisoun vents her old husbands’ misogynist accusations ("oxen, asses, hors, and houndes" tested before buying, unlike wives) while teaching "wise wives" how to argue back.',
    options: [
      { id: 'p3', label: 'P3: Three Old Rich Husbands & Gaslighting (ll. 193–234)' },
      { id: 'p6', label: 'P6: Funeral Flirtation & Venus/Mars Astrology (ll. 587–626)' },
      { id: 'p9', label: 'P9: Fairies vs. Friars & The Rape (ll. 857–918)' },
      { id: 'p10', label: 'P10: Loathly Lady’s Gentillesse Sermon (ll. 1109–1176)' }
    ],
    bestId: 'p3',
    altValidId: 'p10',
    blueprint: {
      thesis: 'Chaucer presents Alisoun as a subversive anti-academic "teacher" who replaces clerical doctrine with cynical marital survival tactics—yet paradoxically echoes traditional didactic authority in her Tale.',
      printedMove: 'Printed (ll. 257–92): Mock-preaching rhetoric ("Thou seist...") turns her husbands’ borrowed St Jerome/Theophrastus Proverbs into an object lesson for wives.',
      secondMove: '2nd Extract (P3, ll. 193–234): Explicitly addresses her classroom of "wise wives, that kan understonde" (l. 225) and teaches pre-emptive gaslighting ("bere him on honde that the cow is wood", l. 232). (Bonus link: contrast with the Loathly Lady’s philosophical "teaching" in P10 ll. 1109–70).',
      ao3: 'AO3: Subverts medieval scholasticism & pulpit sermons (exempla tradition), where women were forbidden to preach or teach men (1 Timothy 2:12).'
    }
  },
  {
    id: 'q-2025-supernatural',
    year: 'June 2025',
    theme: 'The Supernatural',
    prompt: 'Explore the ways in which Chaucer presents the supernatural in The Wife of Bath’s Prologue and Tale, by referring to lines 605–626 and one other extract of similar length.',
    printedExtractSummary: 'Prologue ll. 605–626: Alisoun blames her lust and boldness on planetary fate ("al Venerien... myn herte is Marcien", "constellacioun", "seinte Venus seel").',
    options: [
      { id: 'p9', label: 'P9: Fairies, Elf-Queene & Friar-Incubi (ll. 857–881)' },
      { id: 'p3', label: 'P3: Three Old Husbands & Gaslighting (ll. 193–234)' },
      { id: 'p7', label: 'P7: Book of Wicked Wives & Lion Fable (ll. 685–720)' },
      { id: 'p1', label: 'P1: Experience vs. Authority (ll. 1–34)' }
    ],
    bestId: 'p9',
    altValidId: 'p10',
    blueprint: {
      thesis: 'Chaucer deploys the supernatural—astrological determinism in the Prologue and Celtic faerie magic in the Tale—not merely as escapism, but as a comic and satirical shield for human desire and anticlerical critique.',
      printedMove: 'Printed (ll. 605–26): Uses planetary antithesis ("Venerien" vs. "Marcien", l. 609–10) and pagan-Christian fusion ("seinte Venus seel") to excuse sexual appetite as cosmic destiny.',
      secondMove: '2nd Extract (P9, ll. 857–81 + or P10 ll. 1236–64): The Tale opens in Arthurian "faierie" before replacing harmless "elves" with predatory friar-"incubi" (l. 880), turning folklore into Estates Satire (or P10’s magical transformation rewarding sovereignty).',
      ao3: 'AO3: Medieval belief in astrology (humoral temperament & free will vs. determinism debates in Boethius) alongside Church hostility to pagan fairy folklore.'
    }
  },
  {
    id: 'q-2024-appearance',
    year: 'June 2024',
    theme: 'Physical Appearance',
    prompt: 'Explore the ways in which Chaucer presents the significance of physical appearance in The Wife of Bath’s Prologue and Tale, by referring to lines 586–626 and one other extract of similar length.',
    printedExtractSummary: 'Prologue ll. 586–626: At her 4th husband’s funeral, Alisoun lusts after Jankin’s "legges and feet so clene and faire" (l. 598) and boasts of being "gat-tothed" and marked by Mars/Venus.',
    options: [
      { id: 'p10', label: 'P10: Loathly Lady’s Ugliness & Transformation (ll. 1100–1108 & 1219–1255)' },
      { id: 'p1', label: 'P1: Experience vs. Authority (ll. 1–34)' },
      { id: 'p7', label: 'P7: Who Painted the Lion? (ll. 685–720)' },
      { id: 'p8', label: 'P8: Ripping the Book & Fight (ll. 788–828)' }
    ],
    bestId: 'p10',
    altValidId: 'p5',
    blueprint: {
      thesis: 'Chaucer uses physical appearance to expose human vanity and reverse traditional gender gazes: in the Prologue, Alisoun objectifies male beauty and flaunts age/marks, whereas in the Tale the Loathly Lady dismantles superficial beauty standards.',
      printedMove: 'Printed (ll. 586–626): Subverts courtly blazon—Alisoun gazes at Jankin’s legs behind a coffin (l. 598) and reframes her "gat-tothed" face as attractive ("bicam me weel").',
      secondMove: '2nd Extract (P10, ll. 1219–55, or P5 ll. 469–94): The Knight recoils from a wife "foul and old" (l. 1220), yet she forces him to choose between ugly fidelity and risky beauty—transforming only after he surrenders judgment. (P5 "flour is goon / bren" also brilliantly contrasts youth and aging).',
      ao3: 'AO3: Medieval physiognomy linked bodily traits (gap teeth, ruddy skin) to lustful temperament; courtly romance equated physical beauty with moral nobility.'
    }
  },
  {
    id: 'q-2023-war',
    year: 'June 2023',
    theme: 'War Between the Sexes',
    prompt: 'Explore the ways in which Chaucer presents the war between the sexes in The Wife of Bath’s Prologue and Tale, by referring to lines 788–828 and one other extract of similar length.',
    printedExtractSummary: 'Prologue ll. 788–828: The climactic physical brawl with Jankin—ripping 3 pages, punching him into the fire, getting struck deaf, playing dead, burning his book, and seizing "al the bridel".',
    options: [
      { id: 'p4', label: 'P4: Keys of the Chest & "Maister of my body" (ll. 308–347)' },
      { id: 'p1', label: 'P1: Biblical Debate on Remarriage (ll. 1–34)' },
      { id: 'p6', label: 'P6: Funeral Flirtation & Astrology (ll. 587–626)' },
      { id: 'p9', label: 'P9: Fairies vs. Friars Opening (ll. 857–881)' }
    ],
    bestId: 'p4',
    altValidId: 'p3',
    blueprint: {
      thesis: 'Chaucer depicts marriage as an ideological and physical power struggle ("maistrie"), moving from verbal and economic guerrilla warfare against old husbands to literal physical combat with Jankin.',
      printedMove: 'Printed (ll. 788–828): Slapstick fabliau violence ("wood leoun", l. 794) turns into psychological mastery ("hastow mordred me?", l. 801) and symbolic book-burning (l. 816).',
      secondMove: '2nd Extract (P4, ll. 308–47): Shows the verbal/economic front of the same war—"Thou shalt nat bothe... Be maister of my body and of my good" (ll. 313–14)—using rapid-fire imperatives and mockery.',
      ao3: 'AO3: Medieval marriage law gave husbands legal authority ("headship") and the right of "reasonable chastisement"; Alisoun’s victory ("al the bridel") radically inverts patriarchal hierarchy.'
    }
  },
  {
    id: 'q-2022-satire',
    year: 'June 2022',
    theme: 'Satire',
    prompt: 'Explore Chaucer’s use of satire in The Wife of Bath’s Prologue and Tale, by referring to lines 371–412 and one other extract of similar length.',
    printedExtractSummary: 'Prologue ll. 371–412: Alisoun repeats antifeminist metaphors ("wommenes love to helle... wilde fyr... wormes shende a tree"), brags of framing husbands first, and demands bed ransom ("til he had maad his raunson").',
    options: [
      { id: 'p9', label: 'P9: Satire on Friars & Corrupt Chivalry (ll. 857–918)' },
      { id: 'p10', label: 'P10: Moral Gentillesse Sermon (ll. 1109–1170)' },
      { id: 'p6', label: 'P6: 4th Husband Funeral (ll. 587–626)' },
      { id: 'p8', label: 'P8: Fight & Reconciliation (ll. 788–828)' }
    ],
    bestId: 'p9',
    altValidId: 'p7',
    blueprint: {
      thesis: 'Chaucer uses double-edged satire: in the Prologue, Alisoun’s confession satirises both greedy materialism and clerical antifeminism, while in the Tale she turns sharp anticlerical and anti-chivalric satire on friars and knights.',
      printedMove: 'Printed (ll. 371–412): Dramatic irony—Alisoun accidentally proves her husbands’ complaints true ("made his raunson", l. 411) while mocking patriarchal clichés.',
      secondMove: '2nd Extract (P9, ll. 857–918): Directly mocks the Pilgrim Friar via Estates Satire ("noon oother incubus but he", l. 880) and strips Arthurian chivalry of illusion by opening with a knight committing rape.',
      ao3: 'AO3: Medieval Estates Satire (targeting corrupt clergy, knights, and merchants) + fabliau/confessional satire tradition.'
    }
  },
  {
    id: 'q-2022-morality',
    year: 'June 2022',
    theme: 'Morality',
    prompt: 'Explore the ways in which morality is presented in The Wife of Bath’s Prologue and Tale, by referring to lines 1219–1264 and one other extract of similar length.',
    printedExtractSummary: 'Tale ll. 1219–1264: The hag offers "foul and old + faithful" vs. "young and fair + risky"; the knight submits to her "wise governance", she becomes fair & good, and Alisoun ends praying for meek young husbands.',
    options: [
      { id: 'p10', label: 'P10 (first half): Gentillesse & Christian Virtue Sermon (ll. 1109–1176)' },
      { id: 'p2', label: 'P2: Sexual Organs & Marital Debt (ll. 113–162)' },
      { id: 'p3', label: 'P3: Cheating Old Husbands (ll. 193–234)' },
      { id: 'p6', label: 'P6: Funeral Flirtation (ll. 587–626)' }
    ],
    bestId: 'p2',
    altValidId: 'p10',
    blueprint: {
      thesis: 'Chaucer contrasts Alisoun’s pragmatic, bodily morality in the Prologue with the Tale’s unexpected Christian-philosophical ideal—only to snap back to amoral comedy in the final lines.',
      printedMove: 'Printed (ll. 1219–64): Moral redemption of the rapist knight through humility ("wise governance"), immediately undercut by Alisoun’s final mock-prayer wishing death on stubborn husbands (ll. 1261–64).',
      secondMove: '2nd Extract (P2, ll. 113–62, or P10 ll. 1109–70): In P2, Alisoun crafts a self-serving "morality" claiming God made sexual organs for "ese of engendrure" and turning St Paul into a mandate for female power (ll. 158–59).',
      ao3: 'AO3: Medieval Catholic asceticism (chastity vs. marriage hierarchy) contrasted with Boethian/Christian virtue ethics in the Tale.'
    }
  },
  {
    id: 'q-2021-argument',
    year: 'Nov 2021',
    theme: 'Argument / Rhetoric',
    prompt: 'Explore Chaucer’s presentation of argument in The Wife of Bath’s Prologue and Tale, by referring to lines 688–720 and one other extract of similar length.',
    printedExtractSummary: 'Prologue ll. 688–720: Alisoun attacks clerical bias ("Who peyntede the leon?"), mocks impotent old scholars, and introduces Jankin’s nightly reading of Eve’s sin.',
    options: [
      { id: 'p1', label: 'P1: Opening Biblical Disputation (ll. 1–34)' },
      { id: 'p5', label: 'P5: Aging & 4th Husband (ll. 469–494)' },
      { id: 'p8', label: 'P8: Physical Fight with Jankin (ll. 788–828)' },
      { id: 'p9', label: 'P9: Arthurian Court Opening (ll. 857–918)' }
    ],
    bestId: 'p1',
    altValidId: 'p10',
    blueprint: {
      thesis: 'Chaucer makes Alisoun a brilliant, slippery rhetorician who defeats male "auctoritee" by exposing its partisan bias and hijacking scholastic disputation for her own ends.',
      printedMove: 'Printed (ll. 688–720): Uses the Aesopian rhetorical question ("Who peyntede the leon?", l. 692) and ad hominem satire ("olde sho", l. 708) to undermine male objectivity.',
      secondMove: '2nd Extract (P1, ll. 1–34): Mimics formal university/clerical disputation—posing counter-questions ("why that the fifthe man...", l. 21) and selective literalism ("wexe and multiplie", l. 28) to out-argue Church Fathers.',
      ao3: 'AO3: Medieval university "disputatio" and St Jerome’s Epistola adversus Jovinianum; women were barred from Latin scholastic debate.'
    }
  },
  {
    id: 'q-2021-gentillesse',
    year: 'Nov 2021',
    theme: 'Gentillesse / Class',
    prompt: 'Explore the ways in which Chaucer presents “gentillesse” in The Wife of Bath’s Prologue and Tale, by referring to lines 1109–1138 and one other extract of similar length.',
    printedExtractSummary: 'Tale ll. 1109–1138: The Loathly Lady rebukes the Knight’s class snobbery, citing Christ and Dante to argue true nobility comes from virtuous deeds, not inherited wealth.',
    options: [
      { id: 'p10b', label: 'P10 (cont.): Fire Simile, Duke/Earl & Valerius (ll. 1139–1176)' },
      { id: 'p9', label: 'P9: Knight’s Rape vs. Noble Chivalry (ll. 882–918)' },
      { id: 'p4', label: 'P4: Keys of the Chest (ll. 308–347)' },
      { id: 'p5', label: 'P5: Bedroom Ransom (ll. 409–419)' }
    ],
    bestId: 'p9',
    altValidId: 'p6',
    blueprint: {
      thesis: 'Chaucer uses the Tale to redefine "gentillesse" from inherited feudal privilege into personal moral virtue—creating sharp irony when set against the Knight’s brutal opening crime and Alisoun’s own class-blind desire.',
      printedMove: 'Printed (ll. 1109–38): Elevated philosophical register, echoing Dante’s Purgatorio and Boethius ("Crist wole we claime of him oure gentillesse", l. 1117), strips aristocratic entitlement ("nat worth an hen", l. 1112).',
      secondMove: '2nd Extract (P9, ll. 882–918, or P6 ll. 620–26): In P9, Arthur’s aristocratic "lusty bacheler" proves his lack of true gentillesse by violently raping a peasant maiden; alternatively in P6 (l. 626), Alisoun herself ignores "what degree" her lovers hold.',
      ao3: 'AO3: Post-Black Death social mobility & rising merchant class (like Alisoun) questioning rigid feudal birthright; Dante’s Convivio & Chaucer’s own "Ballade of Gentillesse".'
    }
  },
  {
    id: 'q-2020-love',
    year: 'June 2020',
    theme: 'Love',
    prompt: 'Explore how Chaucer presents love in The Wife of Bath’s Prologue and Tale, by referring to lines 593–626 and one other extract of similar length.',
    printedExtractSummary: 'Prologue ll. 593–626: Alisoun falls for 20-year-old Jankin at her 4th husband’s funeral, driven by Venus/Mars astrology and indiscriminate appetite ("ne loved nevere by no discrecioun").',
    options: [
      { id: 'p8', label: 'P8: Fight with Jankin & Mutual Kindness (ll. 788–828)' },
      { id: 'p3', label: 'P3: Mercantile Love with Old Husbands (ll. 193–234)' },
      { id: 'p1', label: 'P1: Biblical Remarriage Debate (ll. 1–34)' },
      { id: 'p7', label: 'P7: Jankin’s Book of Wicked Wives (ll. 685–720)' }
    ],
    bestId: 'p8',
    altValidId: 'p3',
    blueprint: {
      thesis: 'Chaucer presents love as deeply conflicted—torn between transactional manipulation (husbands 1–3), reckless physical infatuation (Jankin), and hard-won mutual respect once power is equalised.',
      printedMove: 'Printed (ll. 593–626): Love is framed as visceral, comic appetite ("coltes tooth", l. 602) and astrological compulsion rather than courtly spiritual devotion.',
      secondMove: '2nd Extract (P8, ll. 788–828 — or contrast with P3 ll. 193–234): P8 shows that reckless love (giving Jankin her land) breeds violence until sovereignty is balanced—yielding genuine affection ("as kinde / As any wyf from Denmark unto Inde", ll. 823–24).',
      ao3: 'AO3: Contrast between medieval Courtly Love conventions (fin’amor) and bourgeois/fabliau realism.'
    }
  },
  {
    id: 'q-2020-women',
    year: 'June 2020',
    theme: 'Women',
    prompt: 'Explore the ways in which Chaucer presents women in The Wife of Bath’s Prologue and Tale, by referring to lines 224–264 and one other extract of similar length.',
    printedExtractSummary: 'Prologue ll. 224–264: Alisoun boasts women can swear and lie twice as boldly as men, then performs a barrage of misogynist stereotypes about poor, rich, and fair wives.',
    options: [
      { id: 'p7', label: 'P7: Who Painted the Lion? (ll. 685–720)' },
      { id: 'p9', label: 'P9: Queen’s Female Court & Maiden’s Rape (ll. 882–918)' },
      { id: 'p5', label: 'P5: Aging & Pathos (ll. 469–494)' },
      { id: 'p1', label: 'P1: Experience vs. Authority (ll. 1–34)' }
    ],
    bestId: 'p7',
    altValidId: 'p9',
    blueprint: {
      thesis: 'Chaucer’s presentation of women is famously ambivalent: Alisoun simultaneously embodies medieval misogynist caricatures (deceitful, greedy, talkative) while articulating a sharp critique of how male authors construct those very stereotypes.',
      printedMove: 'Printed (ll. 224–64): Alisoun confirms clerical misogyny ("no man / Swere and lyen, as a womman kan", ll. 227–28) even as she mocks her old husbands’ paranoia.',
      secondMove: '2nd Extract (P7, ll. 685–720): Shifts from performing stereotypes to dissecting their source—exposing male clerical authorship ("Who peyntede the leon?", l. 692) as propaganda written inside closed "oratories".',
      ao3: 'AO3: Medieval binary view of women (Eve the temptress vs. Virgin Mary) and anti-matrimonial tradition (Jerome, Theophrastus, Walter Map).'
    }
  },
  {
    id: 'q-2019-authority',
    year: 'June 2019',
    theme: 'Rebellion Against Authority',
    prompt: 'Explore how Chaucer presents the Wife’s rebellion against voices of authority in The Wife of Bath’s Prologue and Tale, by referring to lines 77–114 and one other extract of similar length.',
    printedExtractSummary: 'Prologue ll. 77–114: Alisoun concedes St Paul praised virginity, yet rebelliously declares "He spak to hem that wolde live parfitly; / And Lordinges, by youre leve, that am nat I" (ll. 111–12).',
    options: [
      { id: 'p8', label: 'P8: Burning Jankin’s Book (ll. 788–828)' },
      { id: 'p1', label: 'P1: Opening Challenge to Authority (ll. 1–34)' },
      { id: 'p4', label: 'P4: Rejecting St Paul’s Dress Code (ll. 308–347)' },
      { id: 'p5', label: 'P5: 4th Husband Revenge (ll. 469–494)' }
    ],
    bestId: 'p8',
    altValidId: 'p1',
    blueprint: {
      thesis: 'Alisoun’s rebellion progresses from witty intellectual subversion of Scripture and Church Fathers to literal physical destruction of patriarchal textuality.',
      printedMove: 'Printed (ll. 77–114): Employs polite irony ("by youre leve", l. 112) and the "vessels of gold/wood" metaphor (ll. 99–104) to carve out legitimate space for married sexuality beneath clerical perfection.',
      secondMove: '2nd Extract (P8, ll. 788–828 — or P1 ll. 1–34): In P8, verbal rebellion becomes physical—tearing "thre leves" from Jankin’s clerical anthology and forcing him to "brenne his book" (l. 816).',
      ao3: 'AO3: Challenge to late-medieval Catholic orthodoxy on celibacy and male clerical monopoly over Latin scripture (preceding Lollard vernacular debates).'
    }
  },
  {
    id: 'q-2019-husbands',
    year: 'June 2019',
    theme: 'Treatment of Husbands',
    prompt: 'Explore how Chaucer presents the Wife’s treatment of her husbands in The Wife of Bath’s Prologue and Tale, by referring to lines 194–223 and one other extract of similar length.',
    printedExtractSummary: 'Prologue ll. 194–223: Alisoun laughs at making her three rich old husbands "swinke" at night after taking their land, nagging them spitefully without remorse.',
    options: [
      { id: 'p5', label: 'P5: Ransom in Bed & Torturing 4th Husband (ll. 409–419 & 480–494)' },
      { id: 'p1', label: 'P1: Five Husbands at Church Door (ll. 1–34)' },
      { id: 'p9', label: 'P9: Arthur’s Knight’s Crime (ll. 882–918)' },
      { id: 'p7', label: 'P7: Jankin’s Book (ll. 685–720)' }
    ],
    bestId: 'p5',
    altValidId: 'p8',
    blueprint: {
      thesis: 'Alisoun treats marriage as an arena of retributive control—exploiting her old husbands commercially, torturing her unfaithful 4th husband psychologically, and fighting Jankin into mutual peace.',
      printedMove: 'Printed (ll. 194–223): Callous laughter ("I laughe whan I thinke", l. 201) and economic calculation ("What sholde I taken keep...", l. 213) show total reversal of wifely submission.',
      secondMove: '2nd Extract (P5, ll. 409–19 & 480–94): Shows both her transactional coldness ("al is for to selle") and visceral revenge on Husband 4 ("in his owene grece I made him frie / ... in erthe I was his purgatorie"). Contrast briefly with P8’s kindness once she wins mastery.',
      ao3: 'AO3: Economic reality of medieval remarrying widows gaining property/dower rights vs. Church teaching that wives must obey (Ephesians 5).'
    }
  },
  {
    id: 'q-2017-justice',
    year: 'June 2017',
    theme: 'Justice',
    prompt: 'Explore how justice is presented in The Wife of Bath’s Prologue and Tale, by referring to lines 902–918 and one other extract of similar length.',
    printedExtractSummary: 'Tale ll. 902–918: After sparing the rapist knight from Arthur’s death sentence, Queen Guinevere places him on a year-and-a-day probation to discover what women most desire—or face the axe.',
    options: [
      { id: 'p10', label: 'P10: Courtroom / Wedding Night Reckoning & Submission (ll. 1227–1264)' },
      { id: 'p3', label: 'P3: Framing Old Husbands (ll. 193–234)' },
      { id: 'p6', label: 'P6: Funeral Flirtation (ll. 587–626)' },
      { id: 'p1', label: 'P1: Opening Biblical Argument (ll. 1–34)' }
    ],
    bestId: 'p10',
    altValidId: 'p8',
    blueprint: {
      thesis: 'Chaucer contrasts patriarchal legal punishment (execution) with poetic, rehabilitative female justice—forcing the arrogant rapist to experience powerlessness and learn empathy before earning redemption.',
      printedMove: 'Printed (ll. 902–18): Guinevere’s judicial rhyme ("keep thy nekke-boon from iren!", l. 906) converts capital punishment into an educational quest about female agency.',
      secondMove: '2nd Extract (P10, ll. 1227–64, or P9 ll. 882–901): The Tale delivers poetic justice when the knight—who forced a maiden against her will—is forced into an unwanted marriage and must surrender "governance" (l. 1231) to a woman.',
      ao3: 'AO3: Medieval common law vs. aristocratic "Courts of Love" presided over by noblewomen; modern tension over a rapist receiving a fairy-tale happy ending.'
    }
  },
  {
    id: 'q-2017-marriage',
    year: 'June 2017',
    theme: 'Marriage',
    prompt: 'Explore how marriage is presented in The Wife of Bath’s Prologue and Tale, by referring to lines 35–58 and one other extract of similar length.',
    printedExtractSummary: 'Prologue ll. 35–58: Alisoun cites King Solomon, Abraham, and Jacob’s multiple wives, quotes St Paul ("Bet is to be wedded than to brinne"), and eagerly welcomes a 6th husband.',
    options: [
      { id: 'p8', label: 'P8: Sovereignty & Mutual Harmony with Jankin (ll. 811–828)' },
      { id: 'p9', label: 'P9: Fairies vs. Friars Opening (ll. 857–881)' },
      { id: 'p7', label: 'P7: Lion Fable & Eve (ll. 685–720)' },
      { id: 'p6', label: 'P6: Astrology Horoscope (ll. 605–626)' }
    ],
    bestId: 'p8',
    altValidId: 'p3',
    blueprint: {
      thesis: 'Chaucer presents marriage as a battleground between clerical dogma (treating marriage as a reluctant concession to lust) and lived human reality—suggesting true marital harmony is only possible when dominance gives way to mutual trust.',
      printedMove: 'Printed (ll. 35–58): Defiant, exuberant endorsement of serial marriage ("Welcome the sixte!", l. 45), weaponising Old Testament patriarchs against Church bans on remarriage.',
      secondMove: '2nd Extract (P8, ll. 811–28, or P3 ll. 193–234): Contrasts the Prologue’s combative marriage ("dettour and thral") with the hard-won peace after Jankin hands over the bridle ("After that day we hadden never debaat", l. 822).',
      ao3: 'AO3: Medieval Church hierarchy of Virginity > Widowhood > Marriage (St Jerome) vs. Chaucer’s wider "Marriage Group" debates.'
    }
  }
];

export const SECTION_A_SCENARIOS = [
  {
    id: 'sa-1',
    unseenTitle: 'Unseen Poem Scenario A: Memory & Domestic Objects',
    unseenSummary: 'An unseen contemporary poem reflects on clearing out a deceased grandmother’s kitchen drawer—finding old ration books, wooden spoons, and faded recipes that evoke a vanished working-class era.',
    choiceA: { id: 'material', label: 'Material (Ros Barber)' },
    choiceB: { id: 'please-hold', label: 'Please Hold (Ciaran O’Driscoll)' },
    bestChoice: 'material',
    plan: [
      'Point 1 (AO4+AO2 — Central Object Motif): Both poems anchor personal grief in mundane domestic objects—Barber’s cotton handkerchiefs ("tucked in the sleeves of cardigans") vs. the unseen’s kitchen items—using tactile nouns to resist forgetting.',
      'Point 2 (AO4+AO2 — Form & Tone Shift): Contrast Barber’s jaunty 8-line conversational stanzas ("hanky-parky") that slowly darken into elegy against the unseen poem’s quieter nostalgic structure.',
      'Point 3 (AO4+AO2 — Generational Change): Both critique modern disposability vs. past endurance; Barber’s "This is your material" turns loss into poetic inheritance. (Remember: NO AO3 context in Section A!)'
    ]
  },
  {
    id: 'sa-2',
    unseenTitle: 'Unseen Poem Scenario B: Gardens, Nature & Control',
    unseenSummary: 'An unseen poem describes a neighbour obsessing over trimming a manicured lawn with noisy machinery, trying to impose rigid geometric order over creeping weeds and wildflowers.',
    choiceA: { id: 'chainsaw-pampas', label: 'Chainsaw Versus the Pampas Grass (Simon Armitage)' },
    choiceB: { id: 'minor-role', label: 'A Minor Role (U A Fanthorpe)' },
    bestChoice: 'chainsaw-pampas',
    plan: [
      'Point 1 (AO4+AO2 — Personification & Violence): Compare Armitage’s predatory, hyper-masculine chainsaw ("grinding its teeth") with the unseen poem’s mechanical control over nature.',
      'Point 2 (AO4+AO2 — Mock-Heroic Form & Tone): Armitage uses deadpan narrative ("It seemed an unlikely match") and irregular stanzas to mock male ego; compare/contrast with the unseen speaker’s satirical or reflective tone.',
      'Point 3 (AO4+AO2 — Resilience of Nature): Both end with nature quietly outlasting human interference—the pampas grass surviving the assault. (Keep strictly focused on language, form, and comparison: NO AO3!)'
    ]
  },
  {
    id: 'sa-3',
    unseenTitle: 'Unseen Poem Scenario C: Borders, Belonging & Outsiders',
    unseenSummary: 'An unseen poem follows a newly arrived migrant worker riding a night bus through an unfamiliar British city, noticing hostile stares while clinging to fragments of their home language.',
    choiceA: { id: 'coming-to-dover', label: 'Look We Have Coming to Dover! (Daljit Nagra)' },
    choiceB: { id: 'the-gun', label: 'The Gun (Vicki Feaver)' },
    bestChoice: 'coming-to-dover',
    plan: [
      'Point 1 (AO4+AO2 — Voice & Hybrid Lexis): Compare Nagra’s energetic, coined "Punglish" compounds ("beeswax’d", "Blair’d") in 5-line quintains with the unseen speaker’s code-switching or isolated perspective.',
      'Point 2 (AO4+AO2 — Hostility vs. Resilience): Contrast Nagra’s visceral rejection ("phlegmed by cushy come-and-go tourists") and triumphant electrical energy ("poling sparks") with the unseen poem’s quieter urban alienation.',
      'Point 3 (AO4+AO2 — Form & Closure): Both use journey structures—Nagra’s defiant arrival at Dover’s cliffs vs. the unseen night-bus transit—to redefine British identity.'
    ]
  },
  {
    id: 'sa-4',
    unseenTitle: 'Unseen Poem Scenario D: Illness, Hospitals & Mortality',
    unseenSummary: 'An unseen poem describes sitting in a sterile oncology waiting room watching the clock tick while healthy passers-by walk carelessly outside the window.',
    choiceA: { id: 'minor-role', label: 'A Minor Role (U A Fanthorpe)' },
    choiceB: { id: 'grayson-perry-urn', label: 'Ode on a Grayson Perry Urn (Tim Turnbull)' },
    bestChoice: 'minor-role',
    plan: [
      'Point 1 (AO4+AO2 — Extended Metaphor vs. Realism): Fanthorpe structures illness through a wry theatrical metaphor ("Propping a spear", "waiting-room roles"), whereas the unseen contrasts sterile interior with outside life.',
      'Point 2 (AO4+AO2 — Repetition & Mundane Diction): Compare Fanthorpe’s numbing hospital repetition ("driving to hospitals, / Parking at hospitals") with the unseen clock-watching to show how illness flattens time.',
      'Point 3 (AO4+AO2 — Public Mask vs. Private Grief): Both expose the gap between polite social avoidance of death and the patient’s raw isolation.'
    ]
  },
  {
    id: 'sa-5',
    unseenTitle: 'Unseen Poem Scenario E: War, Cruelty & Moral Silence',
    unseenSummary: 'An unseen poem is spoken by an old soldier recalling how his platoon stood silently by while civilians were mistreated, justifying it afterwards as "just orders".',
    choiceA: { id: 'giuseppe', label: 'Giuseppe (Roderick Ford)' },
    choiceB: { id: 'out-of-the-bag', label: 'Out of the Bag (Seamus Heaney)' },
    bestChoice: 'giuseppe',
    plan: [
      'Point 1 (AO4+AO2 — Detached Tone & Frame Narration): Both use understated, flat confession ("The rest they cooked and fed to the troops") to expose how ordinary people rationalise atrocities.',
      'Point 2 (AO4+AO2 — Dehumanisation & Euphemism): Ford’s mermaid reduced to "only a fish" mirrors the unseen soldier’s euphemistic bureaucracy ("just orders").',
      'Point 3 (AO4+AO2 — Bodily Shame at the Close): Compare Giuseppe’s lingering physical guilt ("couldn’t look me in the eye") with the unseen speaker’s attempt at self-justification.'
    ]
  },
  {
    id: 'sa-6',
    unseenTitle: 'Unseen Poem Scenario F: Power & Coercion in Relationships',
    unseenSummary: 'An unseen poem depicts a controlling partner policing every outfit and meal, shrinking the speaker’s world until an unexpected final act breaks the cage.',
    choiceA: { id: 'eat-me', label: 'Eat Me (Patience Agbabi)' },
    choiceB: { id: 'disappointed-man', label: 'From the Journal of a Disappointed Man (Andrew Motion)' },
    bestChoice: 'eat-me',
    plan: [
      'Point 1 (AO4+AO2 — Tight Form as Entrapment): Agbabi’s 10 rigid ABA tercets mimic domestic captivity and routine; compare how form mirrors control in the unseen poem.',
      'Point 2 (AO4+AO2 — Bodily Hyperbole & Imagery): Contrast Agbabi’s visceral, grotesque size metaphors ("tidal wave of flesh") with the unseen poem’s imagery of shrinking or confinement.',
      'Point 3 (AO4+AO2 — Final Power Reversal): Both pivot sharply at the end—Agbabi’s lethal inversion ("I rolled and he drowned / in my flesh") turning victim into victor.'
    ]
  }
];
