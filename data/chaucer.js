// 10 Universal "Swiss Army Knife" Anchor Passages + 12-Beat Full Line Map
// Verbatim Middle English text & page numbers from James Winny (Cambridge, 1994/2016)

export const CHAUCER_THEMES = [
  'All',
  'Marriage',
  'Power / Maistrie',
  'Authority / Religion',
  'Women / Misogyny',
  'Sex / Body',
  'Love',
  'Age / Appearance',
  'Argument / Rhetoric',
  'Gentillesse / Class',
  'Justice / Morality',
  'Supernatural / Satire'
];

export const ANCHOR_PASSAGES = [
  {
    id: 'p1',
    code: 'P1',
    title: 'Experience vs. Authority & Five Husbands',
    section: 'Prologue',
    lines: 'll. 1–34',
    winnyPages: 'Winny pp. 38–39',
    themes: ['Authority / Religion', 'Marriage', 'Argument / Rhetoric', 'Women / Misogyny'],
    summary: 'Alisoun opens by declaring lived experience superior to clerical books, boasting of five church-door husbands and twisting Scripture (Cana, the Samaritan woman, Genesis) to defeat medieval bans on remarriage.',
    stanzas: [
      {
        range: 'll. 1–8',
        me: `‘Experience, though noon auctoritee
Were in this world, is right ynogh for me
To speke of wo that is in mariage;
For, lordinges, sith I twelve yeer was of age,
Thonked be God that is eterne on live,
Housbondes at chirche dore I have had five —
If I so ofte mighte have ywedded bee —
And alle were worthy men in hir degree.`,
        mod: '“Experience, even if there were no written authority in this world, is quite enough for me to speak about the misery in marriage; for, gentlemen, since I was twelve years old—thanked be God who lives eternally—I have had five husbands at the church door (if one may legally marry so often), and all were decent, well-to-do men in their rank.”'
      },
      {
        range: 'll. 14–25',
        me: `Herkne eek, lo, which a sharp word for the nones,
Biside a welle, Jhesus, God and man,
Spak in repreeve of the Samaritan:
“Thou hast yhad five housbondes,” quod he,
“And that ilke man that now hath thee
Is noght thyn housbonde,” thus seyde he certeyn.
What that he mente therby, I kan nat seyn;
But that I axe, why that the fifthe man
Was noon housbonde to the Samaritan?
How manye mighte she have in mariage?
Yet herde I nevere tellen in myn age
Upon this nombre diffinicioun.`,
        mod: '“Listen also to what a pointed remark Jesus, God and man, spoke beside a well in rebuke of the Samaritan woman: ‘You have had five husbands,’ he said, ‘and the man who has you now is not your husband.’ What he meant by that, I cannot say; but I ask why the fifth man wasn’t a husband to her? How many might she have in marriage? In all my life I never heard a fixed limit stated on this number.”'
      },
      {
        range: 'll. 26–34',
        me: `Men may devine and glosen, up and doun,
But wel I woot, expres, withoute lie,
God bad us for to wexe and multiplie;
That gentil text kan I wel understonde.
Eek wel I woot, he seyde myn housbonde
Sholde lete fader and mooder, and take to me.
But of no nombre mencion made he,
Of bigamie, or of octogamie;
Why sholde men thanne speke of it vileynie?`,
        mod: '“Men may speculate and twist texts up and down, but I know for a fact, explicitly and without a lie, that God commanded us to increase and multiply; that fine text I know how to understand very well! Also I know he said my husband should leave father and mother and cleave to me—but he mentioned no number, neither two marriages nor eight. Why then should people speak of it as shameful?”'
      }
    ],
    glosses: {
      experience: 'lived personal knowledge (opposed to clerical books)',
      auctoritee: 'written scholarly/church authority',
      ynogh: 'enough',
      lordinges: 'gentlemen (pilgrims)',
      sith: 'since',
      eterne: 'eternal ("eterne on live" = alive forever)',
      ywedded: 'wedded, married (y- = past participle)',
      degree: 'social rank, station',
      eek: 'also, moreover',
      nones: 'occasion ("for the nones" = pointedly)',
      repreeve: 'rebuke, criticism',
      ilke: 'same ("that ilke man" = that very man)',
      quod: 'said',
      kan: 'know how to / can',
      axe: 'ask',
      diffinicioun: 'exact limit, definition',
      devine: 'speculate, guess',
      glosen: 'twist / interpret texts elaborately',
      woot: 'know as a fact',
      expres: 'explicitly, clearly',
      wexe: 'grow, increase',
      gentil: 'noble, admirable (used sarcastically/playfully)',
      lete: 'leave, forsake',
      bigamie: 'remarrying after a spouse dies (canon-law sin)',
      octogamie: 'marrying eight times (term from St Jerome)',
      vileynie: 'disgrace, shame'
    },
    quotes: [
      {
        quote: '“Experience, though noon auctoritee / Were in this world, is right ynogh for me” (ll. 1–2)',
        meaning: 'Lived experience outweighs all written church/male books.',
        ao2: 'Antithesis right from line 1 sets up her entire rhetorical battle.',
        ao3: 'Challenges medieval scholasticism & Church Fathers (St Jerome).'
      },
      {
        quote: '“Men may devine and glosen, up and doun, / But wel I woot, expres, withoute lie, / God bad us for to wexe and multiplie” (ll. 26–28)',
        meaning: 'Scholars twist texts, whereas God explicitly told us to multiply.',
        ao2: 'Satiric verb “glosen” + literalist selective quoting of Genesis 1:28.',
        ao3: 'Exposes clerical monopoly over Latin Scripture & exegesis.'
      },
      {
        quote: '“What that he mente therby, I kan nat seyn” (l. 20)',
        meaning: 'I don’t know what Jesus meant by rebuking the Samaritan.',
        ao2: 'Dramatic irony: feigned innocence (“Chaucer’s innocence”) dodges moral critique.',
        ao3: 'Medieval readers knew John 4 condemned lust—her evasion is comic subversion.'
      }
    ]
  },
  {
    id: 'p2',
    code: 'P2',
    title: 'Sexual Organs, Barley-Bread & “Dettour and Thral”',
    section: 'Prologue',
    lines: 'll. 113–162',
    winnyPages: 'Winny pp. 41–42',
    themes: ['Sex / Body', 'Authority / Religion', 'Power / Maistrie', 'Marriage'],
    summary: 'She pivots from theology to anatomy: sexual organs were made for pleasure as well as procreation, wives are “barley-bread” (which Jesus used to feed crowds), and St Paul’s “marital debt” makes her husband her debtor and slave.',
    stanzas: [
      {
        range: 'll. 113–128',
        me: `I wol bistowe the flour of al myn age
In the actes and in fruit of mariage.
Telle me also, to what conclusion
Were membres maad of generacion,
And of so parfit wys a wight ywroght?
Trusteth right wel, they were nat maad for noght.
Glose whoso wole, and seye bothe up and doun,
That they were maked for purgacioun
Of urine, and oure bothe thinges smale
Were eek to knowe a femele from a male,
And for noon oother cause, — say ye no?
The experience woot wel it is noght so.
So that the clerkes be nat with me wrothe,
I sey this, that they maked ben for bothe,
This is to seye, for office, and for ese
Of engendrure, ther we nat God displese.`,
        mod: '“I will spend the prime of my life in the acts and fruit of marriage. Tell me too: for what purpose were sexual organs made, and created by so perfectly wise a Maker? Trust me, they were not made for nothing! Let whoever wants twist the text and argue they were made merely to pass urine and tell male from female—don’t you agree? Experience knows well it’s not so. Without offending clerics, I say they were made for both: practical function and the pleasure of procreation.”'
      },
      {
        range: 'll. 143–161',
        me: `Lat hem be breed of pured whete-seed,
And lat us wives hoten barly-breed;
And yet with barly-breed, Mark telle kan,
Oure Lord Jhesu refresshed many a man.
In swich estaat as God hath cleped us
I wol persevere; I nam nat precius.
In wyfhod I wol use myn instrument
As frely as my Makere hath it sent.
If I be daungerous, God yeve me sorwe!
Myn housbonde shal it have bothe eve and morwe,
Whan that him list come forth and paye his dette.
An housbonde I wol have, I wol nat lette,
Which shal be bothe my dettour and my thral,
And have his tribulacion withal
Upon his flessh, whil that I am his wyf.
I have the power duringe al my lyf
Upon his propre body, and noght he.
Right thus the Apostel tolde it unto me;
And bad oure housbondes for to love us weel.`,
        mod: '“Let virgins be refined wheat bread, and let us wives be called barley-bread; yet with barley-bread (as Mark [actually John] tells) Jesus refreshed many men! I will persevere in the calling God gave me; I’m not squeamish. In wifehood I’ll use my sexual organ as freely as my Maker gave it. God punish me if I’m reluctant! My husband shall have it morning and night whenever he pleases to pay his debt. I will have a husband—I won’t be stopped—who shall be both my debtor and my slave, with trouble upon his flesh while I’m his wife. I have power all my life over his own body, and not he over mine. That’s what the Apostle told me!”'
      }
    ],
    glosses: {
      bistowe: 'spend, devote',
      flour: 'best prime/flower',
      ywroght: 'created, fashioned',
      noght: 'nothing',
      glose: 'explain away, twist meaning',
      purgacioun: 'excretion, cleansing',
      clerkes: 'scholars, churchmen',
      wrothe: 'angry',
      office: 'practical bodily function',
      ese: 'pleasure, comfort',
      engendrure: 'sex / procreation',
      pured: 'refined, pure',
      hoten: 'be called',
      refresshed: 'fed, sexually satisfied (pun)',
      estaat: 'calling, condition',
      cleped: 'called',
      nam: 'am not',
      precius: 'fastidious, prudish',
      daungerous: 'reluctant, aloof, withholding',
      sorwe: 'misfortune, curse',
      list: 'pleases ("him list" = pleases him)',
      dette: 'conjugal/sexual duty',
      lette: 'be hindered, stop',
      dettour: 'debtor',
      thral: 'slave, subordinate',
      propre: 'own'
    },
    quotes: [
      {
        quote: '“In wyfhod I wol use myn instrument / As frely as my Makere hath it sent.” (ll. 149–50)',
        meaning: 'I will freely use my body as God created it.',
        ao2: 'Euphemistic metaphor (“instrument”) + bold declarative modals (“wol”).',
        ao3: 'Reclaims female sexuality from St Jerome’s anti-body asceticism.'
      },
      {
        quote: '“Which shal be bothe my dettour and my thral” (l. 155)',
        meaning: 'He will owe me sex/money and be my slave.',
        ao2: 'Mercantile/feudal lexis (“dettour”, “thral”) turns marriage into power ownership.',
        ao3: 'Subverts medieval legal coverture and wifely obedience.'
      },
      {
        quote: '“I have the power duringe al my lyf / Upon his propre body, and noght he.” (ll. 158–59)',
        meaning: 'I control his body, not he mine.',
        ao2: 'Truncated biblical echo—she deletes the reciprocal half of 1 Corinthians 7:4.',
        ao3: 'Highlights Chaucer’s irony: Alisoun misquotes St Paul just as clerics misquote texts.'
      }
    ]
  },
  {
    id: 'p3',
    code: 'P3',
    title: 'Three Old Rich Husbands & Gaslighting (“Bere on honde”)',
    section: 'Prologue',
    lines: 'll. 193–234',
    winnyPages: 'Winny pp. 43–44',
    themes: ['Marriage', 'Power / Maistrie', 'Argument / Rhetoric', 'Women / Misogyny'],
    summary: 'She divides her five husbands into “three good” (rich and old) and “two bad”, bragging about exhausting the old men financially and sexually, then teaching wives how to lie boldly and frame their husbands first.',
    stanzas: [
      {
        range: 'll. 195–214',
        me: `I shal seye sooth, tho housbondes that I hadde,
As thre of hem were goode, and two were badde.
The thre were goode men, and riche, and olde;
Unnethe mighte they the statut holde
In which that they were bounden unto me.
Ye woot wel what I meene of this, pardee.
As help me God, I laughe whan I thinke
How pitously a-night I made hem swinke!
And, by my fey, I tolde of it no stoor.
They had me yeven hir lond and hir tresoor;
Me neded nat do lenger diligence
To winne hir love, or doon hem reverence.
They loved me so wel, by God above,
That I ne tolde no deyntee of hir love.
A wys womman wol bisie hire evere in oon
To gete hir love, ye, ther as she hath noon.
But sith I hadde hem hoolly in myn hond,
And sith they hadde me yeven al hir lond,
What sholde I taken keep hem for to plese,
But it were for my profit and myn ese?`,
        mod: '“I’ll tell the truth: of my husbands, three were good and two were bad. The three were good men—rich and old; they could scarcely keep the marital obligation binding them to me. You know what I mean, by God! I laugh when I remember how piteously I made them labour at night, and cared nothing for it. Once they had given me their land and wealth, I didn’t need to try to win their love or respect them. Why should I bother pleasing them, unless for my own profit and comfort?”'
      },
      {
        range: 'll. 224–234',
        me: `Now herkneth hou I baar me proprely,
Ye wise wives, that kan understonde.
Thus shulde ye speke and bere hem wrong on honde;
For half so boldely kan ther no man
Swere and lyen, as a womman kan.
I sey nat this by wives that been wise,
But if it be whan they hem misavise.
A wys wyf shal, if that she kan hir good,
Bere him on honde that the cow is wood,
And take witnesse of hir owene maide
Of hir assent; but herkneth how I saide:`,
        mod: '“Now listen how cleverly I behaved, you wise wives who understand. This is how you should talk and falsely accuse them; for no man can swear and lie half as boldly as a woman can. A wise wife, if she knows what’s good for her, will convince him the talking bird [chough] is crazy, and get her own maid to back up her story. Listen to what I said:”'
      }
    ],
    glosses: {
      sooth: 'truth',
      tho: 'those',
      unnethe: 'scarcely, hardly',
      statut: 'marital law/obligation (sex)',
      pardee: 'by God, certainly',
      swinke: 'toil, labour hard',
      fey: 'faith',
      stoor: 'value ("tolde no stoor" = cared nothing)',
      yeven: 'given',
      tresoor: 'treasure, wealth',
      deyntee: 'value ("tolde no deyntee" = prized it not)',
      bisie: 'busy, exert',
      hoolly: 'wholly, completely',
      keep: 'care ("taken keep" = bother)',
      ese: 'comfort, pleasure',
      baar: 'conducted ("baar me proprely" = managed things)',
      bere: 'delude ("bere on honde" = gaslight/accuse falsely)',
      misavise: 'act foolishly',
      cow: 'chough (talkative bird)',
      wood: 'mad, insane',
      assent: 'agreement, complicity'
    },
    quotes: [
      {
        quote: '“The thre were goode men, and riche, and olde” (l. 197)',
        meaning: 'Her definition of a “good” husband is purely financial and weak.',
        ao2: 'Polysyndeton + bathos equates moral goodness with wealth and impotence.',
        ao3: 'Reflects medieval marriage economics & rich widowhood independence.'
      },
      {
        quote: '“What sholde I taken keep hem for to plese, / But it were for my profit and myn ese?” (ll. 213–14)',
        meaning: 'Why please them except for my profit and comfort?',
        ao2: 'Rhetorical question + mercantile diction (“profit”) strips romance from marriage.',
        ao3: 'Estates satire: Alisoun as bourgeois clothier applying market logic to love.'
      },
      {
        quote: '“For half so boldely kan ther no man / Swere and lyen, as a womman kan.” (ll. 227–28)',
        meaning: 'No man can lie as boldly as a woman.',
        ao2: 'Double irony: boasts of cunning while reciting medieval misogynist stereotypes.',
        ao3: 'Satirical “confession” tradition (like the Pardoner or Piers Plowman’s vices).'
      }
    ]
  },
  {
    id: 'p4',
    code: 'P4',
    title: 'Keys of the Chest & “Maister of my body and of my good”',
    section: 'Prologue',
    lines: 'll. 308–347',
    winnyPages: 'Winny pp. 47–48',
    themes: ['Power / Maistrie', 'Marriage', 'Women / Misogyny', 'Authority / Religion'],
    summary: 'In her dramatic tirade against an old jealous husband, she demands both financial keys and bodily freedom, mocks his spying with Ptolemy’s false proverb and the candle-lantern metaphor, and dismisses St Paul’s rules on modest dress.',
    stanzas: [
      {
        range: 'll. 308–322',
        me: `But tel me this: why hidestow, with sorwe,
The keyes of thy cheste awey fro me?
It is my good as wel as thyn, pardee!
What, wenestow make an idiot of oure dame?
Now by that lord that called is Seint Jame,
Thou shalt nat bothe, thogh that thou were wood,
Be maister of my body and of my good;
That oon thou shalt forgo, maugree thine yen.
What helpith it of me to enquere or spyen?
I trowe thou woldest loke me in thy chiste!
Thou sholdest seye, “Wyf, go wher thee liste;
Taak youre disport, I wol nat leve no talis.
I knowe yow for a trewe wyf, dame Alis.”
We love no man that taketh kep or charge
Wher that we goon; we wol ben at oure large.`,
        mod: '“Tell me this: why on earth do you hide the keys of your money-chest from me? It’s my property as well as yours! Do you think you can treat the lady of the house like an idiot? By St James, even if you go mad, you shall not be master of both my body and my wealth—one of those you’ll lose, despite your watchful eyes! You’d lock me in your chest if you could! You ought to say, ‘Wife, go wherever you like, enjoy yourself, I know you’re faithful, Dame Alice.’ We love no man who polices where we go; we want to be completely free.”'
      },
      {
        range: 'll. 331–347',
        me: `For, certeyn, olde dotard, by youre leve,
Ye shul have queynte right ynogh at eve.
He is to greet a nigard that wolde werne
A man to lighte a candle at his lanterne;
He shal have never the lasse light, pardee.
Have thou ynogh, thee thar nat pleyne thee.
Thou seist also, that if we make us gay
With clothing, and with precious array,
That it is peril of oure chastitee;
And yet, with sorwe! thou most enforce thee,
And seye thise wordes in the Apostles name:
“In habit maad with chastitee and shame
Ye wommen shul apparaille yow,” quod he,
“And noght in tressed heer and gay perree,
As perles, ne with gold, ne clothes riche.”
After thy text, ne after thy rubriche,
I wol nat wirche as muchel as a gnat.`,
        mod: '“Certainly, old fool, you’ll have plenty of sex at night. He’s too big a miser who forbids another man to light a candle from his lantern—he loses none of his own light! As long as you have enough, you don’t need to complain. You also preach in the Apostle’s name that women should dress in modesty, not braided hair and jewels—I won’t follow your scripture or your church rules as much as a gnat!”'
      }
    ],
    glosses: {
      hidestow: 'do you hide',
      sorwe: 'plague take you (curse)',
      cheste: 'money-chest, strongbox',
      good: 'property, goods',
      wenestow: 'do you suppose',
      wood: 'mad, furious',
      maugree: 'in spite of ("maugree thine yen" = despite your spying eyes)',
      trowe: 'believe',
      loke: 'lock',
      disport: 'pleasure, amusement',
      leve: 'allow / believe ("no talis" = gossip)',
      kep: 'watch, guard ("taketh kep" = polices)',
      large: 'liberty ("at oure large" = completely free)',
      dotard: 'senile old fool',
      queynte: 'female genitalia / sex',
      nigard: 'miser',
      werne: 'refuse, forbid',
      lasse: 'less',
      thar: 'needs ("thee thar nat pleyne" = you need not complain)',
      array: 'clothing, finery',
      enforce: 'force/rub the point in',
      perree: 'precious stones, jewels',
      rubriche: 'church rule / red-letter directive',
      wirche: 'act, obey'
    },
    quotes: [
      {
        quote: '“Thou shalt nat bothe, thogh that thou were wood, / Be maister of my body and of my good” (ll. 313–14)',
        meaning: 'You cannot control both my body and my money.',
        ao2: 'Parallel noun phrases (“my body... my good”) link sexual autonomy to economic power.',
        ao3: 'Under medieval coverture law, a wife’s property legally passed to her husband.'
      },
      {
        quote: '“He is to greet a nigard that wolde werne / A man to lighte a candle at his lanterne” (ll. 333–34)',
        meaning: 'Only a miser refuses someone else lighting a candle from his lantern.',
        ao2: 'Homey proverb/metaphor trivialises female infidelity as harmless sharing.',
        ao3: 'Provokes horror in patriarchal medieval listeners obsessed with cuckoldry & heirs.'
      },
      {
        quote: '“After thy text, ne after thy rubriche, / I wol nat wirche as muchel as a gnat.” (ll. 346–47)',
        meaning: 'I won’t obey your scripture or rules even a gnat’s worth.',
        ao2: 'Defiant bathos: juxtaposes sacred “text/rubriche” with a tiny “gnat”.',
        ao3: 'Direct rejection of 1 Timothy 2:9 and clerical dress codes.'
      }
    ]
  },
  {
    id: 'p5',
    code: 'P5',
    title: '“Al is for to selle”, Aging & The 4th Husband',
    section: 'Prologue',
    lines: 'll. 409–419 & 469–494',
    winnyPages: 'Winny pp. 50–52',
    themes: ['Sex / Body', 'Age / Appearance', 'Marriage', 'Women / Misogyny'],
    summary: 'She confesses withholding sex in bed for ransom (“al is for to selle”), then shifts into poignant nostalgia about her lost youth, fiery defiance of aging (“The flour is goon... The bren now moste I selle”), and making her cheating 4th husband “fry in his own grease”.',
    stanzas: [
      {
        range: 'll. 409–419',
        me: `I wolde no lenger in the bed abide,
If that I felte his arm over my side,
Til he had maad his raunson unto me;
Thanne wolde I suffre him do his nicetee.
And therfore every man this tale I telle,
Winne whoso may, for al is for to selle;
With empty hand men may none haukes lure.
For winning wolde I al his lust endure,
And make me a feyned appetit;
And yet in bacon hadde I nevere delit;
That made me that evere I wolde hem chide.`,
        mod: '“I wouldn’t stay in bed a moment longer if I felt his arm over my side, until he had paid his ransom to me; only then would I let him do his foolish business. Therefore I tell every man: profit whoever can, for everything is for sale! You can’t lure hawks with an empty hand. For money I’d endure all his lust and fake desire—though I never liked old cured meat [old husbands], which is why I nagged them constantly.”'
      },
      {
        range: 'll. 469–490',
        me: `But, Lord Crist! whan that it remembreth me
Upon my yowthe, and on my jolitee,
It tikleth me aboute myn herte roote.
Unto this day it dooth myn herte boote
That I have had my world as in my time.
But age, allas, that al wole envenime,
Hath me biraft my beautee and my pith.
Lat go, farewel; the devel go therwith!
The flour is goon, ther is namoore to telle;
The bren, as I best kan, now moste I selle;
But yet to be right mirie wol I fonde.
Now wol I tellen of my fourthe housbonde.
I seye, I hadde in herte greet despit
That he of any oother had delit.
But he was quit, by God and by Seint Joce!
I made him of the same wode a croce; ...
That in his owene grece I made him frie
For angre, and for verray jalousie.
By God! in erthe I was his purgatorie`,
        mod: '“But Lord Christ! when I remember my youth and high spirits, it thrills me to the root of my heart. To this day it warms my heart that I have had my world in my time. Yet age—alas, that poisons everything—has robbed me of my beauty and vigour. Let it go, the devil take it! The fine flour is gone; now I must sell the bran as best I can—yet I’ll still try to be merry! About my fourth husband: I resented deeply that he took pleasure in a mistress. But he was paid back! I made him fry in his own fat for anger and jealousy; on earth I was his purgatory!”'
      }
    ],
    glosses: {
      abide: 'stay, remain',
      raunson: 'ransom, cash settlement',
      nicetee: 'lust, silly business',
      winne: 'profit, gain ("winning" = profit)',
      haukes: 'hawks (falconry metaphor)',
      feyned: 'faked, pretended',
      bacon: 'old cured meat (her old husbands)',
      delit: 'pleasure',
      chide: 'nag, scold',
      jolitee: 'youthful gaiety & sexual zest',
      boote: 'good, comfort',
      envenime: 'poison, destroy',
      biraft: 'robbed, deprived of',
      pith: 'vitality, strength',
      bren: 'coarse bran/chaff (vs. "flour")',
      fonde: 'try, strive',
      despit: 'bitter resentment',
      quit: 'paid back, made even',
      croce: 'cross (paid back in his own coin)',
      grece: 'grease, fat',
      purgatorie: 'earthly suffering that purges sins before heaven'
    },
    quotes: [
      {
        quote: '“Winne whoso may, for al is for to selle; / With empty hand men may none haukes lure.” (ll. 414–15)',
        meaning: 'Everything has a price; you can’t train hawks empty-handed.',
        ao2: 'Proverbial aphorism + falconry metaphor frames intimacy as cold economics.',
        ao3: 'Reflects late-medieval commercial bourgeois values invading feudal romance.'
      },
      {
        quote: '“That I have had my world as in my time. / But age, allas, that al wole envenime” (ll. 473–74)',
        meaning: 'I lived fully in my day, though age poisons everything.',
        ao2: 'Sudden elegiac shift in tone breaks her comic bravado with genuine pathos.',
        ao3: 'Echoes La Vieille in Roman de la Rose; rare vulnerable female voice on aging.'
      },
      {
        quote: '“The flour is goon, ther is namoore to telle; / The bren, as I best kan, now moste I selle” (ll. 477–78)',
        meaning: 'The fine flour of youth is gone; I must sell the coarse bran.',
        ao2: 'Agricultural metaphor of flour vs. bran accepts decline while staying pragmatic.',
        ao3: 'Challenges medieval stereotypes of ugly old women as merely grotesque.'
      }
    ]
  },
  {
    id: 'p6',
    code: 'P6',
    title: 'Funeral Flirtation, Jankin & Venus/Mars Astrology',
    section: 'Prologue',
    lines: 'll. 587–626',
    winnyPages: 'Winny pp. 55–56',
    themes: ['Love', 'Age / Appearance', 'Supernatural / Satire', 'Sex / Body'],
    summary: 'At her fourth husband’s funeral, Alisoun weeps behind a kerchief while eyeing 20-year-old Jankin’s shapely legs; she explains her “colt’s tooth”, gap-teeth, and divided Venus/Mars horoscope.',
    stanzas: [
      {
        range: 'll. 587–604',
        me: `Whan that my fourthe housbonde was on beere,
I weep algate, and made sory cheere,
As wives mooten, for it is usage,
And with my coverchief covered my visage,
But for that I was purveyed of a make,
I wepte but smal, and that I undertake.
To chirche was myn housbonde born a-morwe
With neighebores, that for him maden sorwe;
And Jankin, oure clerk, was oon of tho.
As help me God! whan that I saugh him go
After the beere, me thoughte he hadde a paire
Of legges and of feet so clene and faire
That al myn herte I yaf unto his hoold.
He was, I trowe, a twenty winter oold,
And I was fourty, if I shal seye sooth;
But yet I hadde alwey a coltes tooth.
Gat-tothed I was, and that bicam me weel;
I hadde the prente of seinte Venus seel.`,
        mod: '“When my fourth husband lay on the funeral bier, I wept and put on a mournful face as wives must by custom, hiding my face with a kerchief—but since I already had a replacement lined up, I wept very little! Next morning, as Jankin walked behind the coffin, I thought he had such trim, shapely legs and feet that I gave my whole heart into his keeping. He was twenty, I think, and I was forty—yet I still had youthful desires. I was gap-toothed, which suited me well; I bore the imprint of St Venus’s seal.”'
      },
      {
        range: 'll. 609–626',
        me: `For certes, I am al Venerien
In feelinge, and myn herte is Marcien.
Venus me yaf my lust, my likerousnesse,
And Mars yaf me my sturdy hardinesse;
Myn ascendent was Taur, and Mars therinne.
Allas, allas, that evere love was sinne!
I folwed ay myn inclinacioun
By vertu of my constellacioun;
That made me I koude noght withdrawe
My chambre of Venus from a good felawe.
Yet have I Martes mark upon my face,
And also in another privee place.
For God so wys be my savacioun,
I ne loved nevere by no discrecioun,
But evere folwede myn appetit,
Al were he short, or long, or blak, or whit;
I took no kep, so that he liked me,
How poore he was, ne eek of what degree.`,
        mod: '“Certainly I am wholly governed by Venus in feeling, and my heart is Martian. Venus gave me lust and sensual appetite, and Mars gave me sturdy boldness; my rising sign was Taurus with Mars inside it. Alas that love was ever called a sin! I always followed my natural inclination by power of my horoscope, so I couldn’t withhold my chamber of Venus from any handsome fellow. I never loved cautiously, but always followed my desire—short or tall, dark or fair, poor or rich, so long as he pleased me.”'
      }
    ],
    glosses: {
      beere: 'funeral bier / coffin frame',
      algate: 'continually, all the same',
      cheere: 'facial expression',
      usage: 'custom, social convention',
      purveyed: 'provided in advance',
      make: 'mate, new husband',
      saugh: 'saw',
      clene: 'trim, shapely',
      hoold: 'keeping, control',
      trowe: 'believe',
      'coltes tooth': 'youthful sexual appetite',
      'gat-tothed': 'gap-toothed (medieval sign of passion/travel)',
      prente: 'imprint, stamp',
      Venerien: 'ruled by Venus (amorous)',
      Marcien: 'ruled by Mars (bold/warlike)',
      likerousnesse: 'sexual eagerness',
      hardinesse: 'boldness, audacity',
      ascendent: 'zodiac sign rising at birth',
      vertu: 'astrological power',
      'good felawe': 'attractive/shady fellow',
      privee: 'intimate, hidden',
      discrecioun: 'caution, prudence',
      liked: 'pleased, attracted',
      degree: 'social rank'
    },
    quotes: [
      {
        quote: '“whan that I saugh him go / After the beere, me thoughte he hadde a paire / Of legges and of feet so clene and faire / That al myn herte I yaf unto his hoold.” (ll. 596–99)',
        meaning: 'Watching Jankin’s shapely legs behind her husband’s coffin, she gives him her heart.',
        ao2: 'Juxtaposition of death (“beere”) and erotic blazon (“legges... clene and faire”) creates dark farce.',
        ao3: 'Subverts medieval widowhood ideals of lifelong grief and chastity.'
      },
      {
        quote: '“For certes, I am al Venerien / In feelinge, and myn herte is Marcien.” (ll. 609–10)',
        meaning: 'My feelings are ruled by Venus, my heart by Mars.',
        ao2: 'Parallel balanced clauses + astrological antithesis explain her split character (love vs. war).',
        ao3: 'Medieval humoral/astrological determinism excuses sin (“constellacioun”) while mocking “Seinte Venus”.'
      },
      {
        quote: '“I ne loved nevere by no discrecioun” (l. 622)',
        meaning: 'I never once loved with caution.',
        ao2: 'Triple negative (“ne... nevere... no”) emphasises reckless passion; foreshadows her blunder giving Jankin her land.',
        ao3: 'Contrasts her mercenary marriages 1–3 with her genuine desire for Jankin.'
      }
    ]
  },
  {
    id: 'p7',
    code: 'P7',
    title: 'Jankin’s Book of Wicked Wives & “Who peyntede the leon?”',
    section: 'Prologue',
    lines: 'll. 685–720',
    winnyPages: 'Winny pp. 58–59',
    themes: ['Authority / Religion', 'Women / Misogyny', 'Argument / Rhetoric'],
    summary: 'Alisoun condemns Jankin’s obsession with his “book of wikked wives” (Jerome, Theophrastus, Tertullian, Ovid), delivers the famous Aesop fable “Who painted the lion?” on male literary bias, and recounts him reading of Eve’s fall.',
    stanzas: [
      {
        range: 'll. 685–696',
        me: `To reden on this book of wikked wives.
He knew of hem mo legendes and lives
Than been of goode wives in the Bible.
For trusteth wel, it is an impossible
That any clerk wol speke good of wives,
But if it be of hooly seintes lives,
Ne of noon oother womman never the mo.
Who peyntede the leon, tel me who?
By God! if wommen hadde writen stories,
As clerkes han withinne hire oratories,
They wolde han writen of men moore wikkednesse
Than al the mark of Adam may redresse.`,
        mod: '“He read day and night in his book of wicked wives. He knew more stories of evil women than of good ones in the Bible. Trust me, it is an impossibility that any male scholar will ever speak well of women—unless they’re dead saints! Tell me, who painted the picture of the lion? By God, if women had written the books as clerics do inside their studies, they would have written more wickedness about men than all of Adam’s race could ever put right!”'
      },
      {
        range: 'll. 706–720',
        me: `Therfore no womman of no clerk is preysed.
The clerk, whan he is oold, and may noght do
Of Venus werkes worth his olde sho,
Thanne sit he doun, and writ in his dotage
That wommen kan nat kepe hir mariage.
But now to purpos, why I tolde thee
That I was beten for a book, pardee!
Upon a night Jankin, that was oure sire,
Redde on his book, as he sat by the fire,
Of Eva first, that for hir wikkednesse
Was al mankinde broght to wrecchednesse,
For which that Jhesu Crist himself was slain,
That boghte us with his herte blood again.
Lo, heere expres of womman may ye finde,
That womman was the los of al mankinde.`,
        mod: '“Therefore no woman is ever praised by a scholar. When a cleric grows old and can’t perform sexual works worth his old shoe, he sits down in his senility and writes that women can’t stay faithful! Now back to why I was beaten for a book: one night Jankin, head of our house, sat by the fire reading first about Eve—how through her wickedness all mankind fell into misery, so Christ had to die.”'
      }
    ],
    glosses: {
      legendes: 'stories, saints’ lives (ironic inversion)',
      impossible: 'an impossibility',
      clerk: 'male university scholar / cleric',
      'but if': 'unless',
      'never the mo': 'never at all',
      peyntede: 'painted (Aesop’s fable)',
      oratories: 'private monastery/study rooms',
      'mark of Adam': 'male descendants of Adam',
      redresse: 'put right, atone for',
      preysed: 'praised',
      sho: 'shoe ("worth his olde sho" = worthless)',
      dotage: 'senile folly',
      kepe: 'keep faithful to',
      sire: 'master of the house',
      redde: 'read',
      expres: 'explicitly stated',
      los: 'ruin, destruction'
    },
    quotes: [
      {
        quote: '“Who peyntede the leon, tel me who? / By God! if wommen hadde writen stories” (ll. 692–93)',
        meaning: 'Who painted the lion being conquered? Men control the narrative.',
        ao2: 'Rhetorical question + Aesop’s fable allusion exposes the subjectivity of authorship.',
        ao3: 'Directly critiques medieval clerical antifeminist canon (St Jerome, Walter Map, Theophrastus).'
      },
      {
        quote: '“The clerk, whan he is oold, and may noght do / Of Venus werkes worth his olde sho, / Thanne sit he doun, and writ in his dotage” (ll. 707–09)',
        meaning: 'Impotent old clerics write misogynist books out of bitterness.',
        ao2: 'Scathing ad hominem satire + colloquial idiom (“olde sho”) undercuts scholarly dignity.',
        ao3: 'Links clerical celibacy to resentment of women in medieval Estates Satire.'
      },
      {
        quote: '“That womman was the los of al mankinde.” (l. 720)',
        meaning: 'Woman caused the downfall of all humanity.',
        ao2: 'Blunt monorhymed emphasis (“wrecchednesse / wikkednesse”, “mankinde / finde”) mimics Jankin’s smug certainty.',
        ao3: 'Patristic doctrine blaming Eve for Original Sin (Tertullian: “devil’s gateway”).'
      }
    ]
  },
  {
    id: 'p8',
    code: 'P8',
    title: 'Ripping Three Leaves, The Fight & “Al the bridel in myn hond”',
    section: 'Prologue',
    lines: 'll. 788–828',
    winnyPages: 'Winny pp. 61–62',
    themes: ['Power / Maistrie', 'Marriage', 'Love', 'Women / Misogyny'],
    summary: 'Fed up with Jankin’s misogynist reading, Alisoun rips three pages out of his book and punches him into the fire; he strikes her deaf, she plays dead to guilt-trip him, and wins total sovereignty, burning the book—leading to mutual kindness.',
    stanzas: [
      {
        range: 'll. 788–802',
        me: `And whan I saugh he wolde nevere fine
To reden on this cursed book al night,
Al sodeynly thre leves have I plight
Out of his book, right as he radde, and eke
I with my fest so took him on the cheke
That in oure fyr he fil bakward adoun.
And he up stirte as dooth a wood leoun,
And with his fest he smoot me on the heed,
That in the floor I lay as I were deed.
And whan he saugh how stille that I lay,
He was agast, and wolde han fled his way,
Til atte laste out of my swogh I breyde.
“O, hastow slain me, false theef?” I seyde,
“And for my land thus hastow mordred me?
Er I be deed, yet wol I kisse thee.”`,
        mod: '“When I saw he would never stop reading that cursed book all night, suddenly I ripped three pages out as he read, and punched him so hard on the cheek that he fell backward into our fire! He sprang up like a mad lion and struck me on the head so I lay on the floor as if dead. Seeing how still I lay, he panicked and nearly fled—until I woke from my swoon: ‘Oh, have you slain me, false thief? Have you murdered me for my land? Before I die, let me kiss you!’”'
      },
      {
        range: 'll. 811–828',
        me: `But atte laste, with muchel care and wo,
We fille acorded by us selven two.
He yaf me al the bridel in myn hond,
To han the governance of hous and lond,
And of his tonge, and of his hond also;
And made him brenne his book anon right tho.
And whan that I hadde geten unto me,
By maistrie, al the soverainetee,
And that he seyde, “Myn owene trewe wyf,
Do as thee lust the terme of al thy lyf;
Keep thyn honour, and keep eek myn estaat” —
After that day we hadden never debaat.
God helpe me so, I was to him as kinde
As any wyf from Denmark unto Inde,
And also trewe, and so was he to me.`,
        mod: '“At last, after much grief, we reached an agreement between the two of us. He gave me the whole bridle in my hand—control of house and land, and of his tongue and hand too—and I made him burn his book right then and there! Once I had won full sovereignty by mastery, and he told me to do as I pleased for life (guarding honour and his standing), we never argued again. I was as kind and faithful to him as any wife from Denmark to India, and so was he to me.”'
      }
    ],
    glosses: {
      fine: 'stop, cease',
      plight: 'ripped, plucked',
      radde: 'read',
      fest: 'fist',
      fil: 'fell',
      stirte: 'leapt up',
      wood: 'mad, furious',
      smoot: 'struck',
      agast: 'terrified',
      swogh: 'swoon, faint',
      breyde: 'awoke, started up',
      hastow: 'have you',
      mordred: 'murdered',
      acorded: 'reconciled, agreed',
      bridel: 'bridle (horse-control metaphor)',
      governance: 'control, authority',
      brenne: 'burn',
      'anon right tho': 'immediately on the spot',
      maistrie: 'mastery, upper hand',
      soverainetee: 'supreme authority',
      lust: 'pleases',
      estaat: 'social reputation',
      debaat: 'quarrel, dispute'
    },
    quotes: [
      {
        quote: '“Al sodeynly thre leves have I plight / Out of his book... / That in oure fyr he fil bakward adoun.” (ll. 790–93)',
        meaning: 'She rips three pages from his book and knocks him into the fire.',
        ao2: 'Slapstick fabliau farce physically topples patriarchal scholarship into the hearth.',
        ao3: 'Books were rare & costly pre-printing—destroying pages is a radical assault on authority.'
      },
      {
        quote: '“He yaf me al the bridel in myn hond... / And made him brenne his book anon right tho.” (ll. 813, 816)',
        meaning: 'He gave her full control and she made him burn his misogynist book.',
        ao2: 'Equestrian metaphor (“bridel”) + symbolic fire-destruction mirrors her earlier silencing.',
        ao3: 'Reverses medieval wife-beating norms (which were legally tolerated) to establish mutual peace.'
      },
      {
        quote: '“I was to him as kinde / As any wyf from Denmark unto Inde, / And also trewe, and so was he to me.” (ll. 823–25)',
        meaning: 'Once she had sovereignty, they lived in mutual kindness and fidelity.',
        ao2: 'Hyperbolic geographical simile shifts tone to tenderness, foreshadowing the Tale’s ending.',
        ao3: 'Anticipates Chaucer’s balanced ideal of mutual love (though only reached after combat).'
      }
    ]
  },
  {
    id: 'p9',
    code: 'P9',
    title: 'Fairies vs. Friars, The Knight’s Crime & Queen’s Court',
    section: 'Tale',
    lines: 'll. 857–918',
    winnyPages: 'Winny pp. 64–65',
    themes: ['Supernatural / Satire', 'Justice / Morality', 'Power / Maistrie', 'Women / Misogyny'],
    summary: 'The Tale opens with a sharp satirical dig at the Friar (claiming friars drove out the fairies and act as sexual incubi), then introduces Arthur’s lusty knight who rapes a maiden and is spared death only if he discovers what women desire most within a year.',
    stanzas: [
      {
        range: 'll. 857–881',
        me: `In th’olde dayes of the King Arthour,
Of which that Britons speken greet honour,
Al was this land fulfild of faierie.
The elf-queene, with hir joly compaignie,
Daunced ful ofte in many a grene mede. ...
But now kan no man se none elves mo,
For now the grete charitee and prayeres
Of limitours and othere hooly freres,
That serchen every lond and every streem,
As thikke as motes in the sonne-beem,
Blessinge halles, chambres, kichenes, boures...
Wommen may go now saufly up and doun.
In every bussh or under every tree
Ther is noon oother incubus but he,
And he ne wol doon hem but dishonour.`,
        mod: '“In the old days of King Arthur, this land was filled with fairies; the elf-queen danced in green meadows. Now no one sees elves anymore—because the great ‘charity’ of licensed begging friars searches every land as thick as dust-motes in a sunbeam, blessing every room. Women can walk safely now: under every bush there’s no demon spirit left except the friar—and he’ll only bring them dishonour!”'
      },
      {
        range: 'll. 882–908',
        me: `And so bifel it that this king Arthour
Hadde in his hous a lusty bacheler,
That on a day cam ridinge fro river;
And happed that, allone as he was born,
He saugh a maide walkinge him biforn,
Of which maide anon, maugree hir heed,
By verray force, he rafte hire maidenhed;
For which oppressioun was swich clamour
And swich pursute unto the king Arthour,
That dampned was this knight for to be deed,
By cours of lawe, and sholde han lost his heed — ...
But that the queene and othere ladies mo
So longe preyeden the king of grace,
Til he his lyf him graunted in the place,
And yaf him to the queene, al at hir wille,
To chese wheither she wolde him save or spille. ...
“I grante thee lyf, if thou kanst tellen me
What thing is it that wommen moost desiren.
Be war, and keep thy nekke-boon from iren!”`,
        mod: '“King Arthur had a young knight who, riding back from hawking, saw a maiden walking ahead and immediately, against her will, by sheer force stole her virginity. Outcry reached Arthur, who condemned him to death by law—until the Queen and ladies begged for mercy, and Arthur handed the knight entirely over to the Queen to save or execute. She tells him: ‘I grant you life if you can tell me what thing women most desire. Beware, and save your neck from the axe! Take a year and a day to search.’”'
      }
    ],
    glosses: {
      fulfild: 'filled completely',
      mede: 'meadow',
      limitours: 'friars licensed to beg in a territory',
      motes: 'dust specks',
      boures: 'bedrooms, inner chambers',
      saufly: 'safely (ironic)',
      incubus: 'male demon assaulting sleeping women',
      'but dishonour': 'only disgrace / seduction',
      bacheler: 'young landless knight',
      'fro river': 'from hawking waterfowl',
      'maugree hir heed': 'against her will',
      rafte: 'stole violently',
      oppressioun: 'rape, violent assault',
      dampned: 'condemned',
      grace: 'mercy, clemency',
      spille: 'destroy, execute',
      'nekke-boon': 'neckbone',
      iren: 'iron (the executioner’s axe)'
    },
    quotes: [
      {
        quote: '“As thikke as motes in the sonne-beem... / Ther is noon oother incubus but he, / And he ne wol doon hem but dishonour.” (ll. 868, 880–81)',
        meaning: 'Friars swarm like dust-motes and act as the only sexual predators left.',
        ao2: 'Sardonic simile + folkloric substitution (“incubus” = friar) mocks the Pilgrim Friar.',
        ao3: 'Anticlerical Estates Satire: late-medieval resentment of corrupt begging friars.'
      },
      {
        quote: '“Of which maide anon, maugree hir heed, / By verray force, he rafte hire maidenhed” (ll. 887–88)',
        meaning: 'Against her will, by sheer force, he raped her.',
        ao2: 'Blunt legalistic verbs (“rafte”, “oppressioun”) strip chivalric glamour off Arthurian romance.',
        ao3: 'Underlines brutal hypocrisy of knightly chivalry code; rare focus on female victim outcry.'
      },
      {
        quote: '“And yaf him to the queene, al at hir wille, / To chese wheither she wolde him save or spille.” (ll. 897–98)',
        meaning: 'The King hands the knight completely over to the Queen’s female court.',
        ao2: 'Shifts judicial power from patriarchal law to a female “court of love”.',
        ao3: 'Medieval “Courts of Love” presided over by noblewomen; models female sovereignty.'
      }
    ]
  },
  {
    id: 'p10',
    code: 'P10',
    title: 'Loathly Lady’s Gentillesse Sermon & Final Transformation',
    section: 'Tale',
    lines: 'll. 1109–1176 & 1219–1264',
    winnyPages: 'Winny pp. 71–76',
    themes: ['Gentillesse / Class', 'Justice / Morality', 'Power / Maistrie', 'Age / Appearance', 'Supernatural / Satire', 'Marriage'],
    summary: 'Forced to marry the ugly old hag who saved his life, the knight insults her low birth, poverty, and ugliness. She delivers a brilliant philosophical sermon proving “gentillesse” comes from God and virtuous deeds, not ancestry—then wins his free submission and transforms into a fair, faithful wife.',
    stanzas: [
      {
        range: 'll. 1109–1124 & 1152–1170',
        me: `But, for ye speken of swich gentillesse
As is descended out of old richesse,
That therfore sholden ye be gentil men,
Swich arrogance is nat worth an hen.
Looke who that is moost vertuous alway,
Privee and apert, and moost entendeth ay
To do the gentil dedes that he kan;
Taak him for the grettest gentil man.
Crist wole we claime of him oure gentillesse,
Nat of oure eldres for hire old richesse. ...
And he that wole han pris of his gentrie,
For he was boren of a gentil hous,
And hadde his eldres noble and vertuous,
And nel himselven do no gentil dedis,
Ne folwen his gentil auncestre that deed is,
He nis nat gentil, be he duc or erl;
For vileyns sinful dedes make a cherl. ...
Ther shul ye seen expres that it no drede is
That he is gentil that dooth gentil dedis.`,
        mod: '“As for this nobility that you claim descends from inherited wealth—such arrogance isn’t worth a hen! Look for whoever is most virtuous always, privately and publicly, and strives to do noble deeds: take him as the greatest gentleman. Christ wills that we claim our nobility from him, not from ancestors’ wealth. Whoever expects praise just for noble birth, yet won’t do noble deeds himself, is not noble—be he duke or earl; sinful deeds make a peasant. He is noble who does noble deeds.”'
      },
      {
        range: 'll. 1227–1264',
        me: `Now chese yourselven, wheither that yow liketh.’
This knight aviseth him and sore siketh,
But atte laste he seyde in this manere:
‘My lady and my love, and wyf so deere,
I put me in youre wise governance;
Cheseth youreself which may be moost plesance,
And moost honour to yow and me also. ...’
‘Thanne have I gete of yow maistrie,’ quod she,
‘Sin I may chese and governe as me lest?’
‘Ye, certes, wyf,’ quod he, ‘I holde it best.’ ...
‘For, by my trouthe, I wol be to yow bothe,
This is to seyn, ye, bothe fair and good.’ ...
And thus they live unto hir lives ende
In parfit joye; and Jhesu Crist us sende
Housbondes meeke, yonge, and fressh abedde,
And grace t’overbide hem that we wedde;
And eek I praye Jhesu shorte hir lives
That wol nat be governed by hir wives`,
        mod: '“‘Now choose yourself whichever pleases you.’ The knight reflects and sighs deeply, then answers: ‘My lady and love, I place myself under your wise governance; choose what brings most honour to you and me.’ ‘Then have I won mastery over you,’ she said, ‘since I may choose and govern as I wish?’ ‘Yes, wife, I think it best.’ ‘By my word, I will be BOTH to you—both beautiful and faithful!’ ... And so they lived in perfect joy; and may Jesus Christ send us husbands meek, young, and vigorous in bed, and grace to outlive them—and shorten the lives of those who won’t be ruled by their wives!”'
      }
    ],
    glosses: {
      gentillesse: 'true moral nobility & grace',
      richesse: 'wealth',
      'privee and apert': 'in private and in public',
      entendeth: 'strives, aims',
      eldres: 'ancestors',
      pris: 'esteem, praise',
      nel: 'will not',
      nis: 'is not',
      cherl: 'low-born peasant / boor',
      drede: 'doubt ("it no drede is" = beyond dispute)',
      aviseth: 'considers, reflects',
      siketh: 'sighs',
      governance: 'rule, guidance',
      plesance: 'pleasure',
      maistrie: 'mastery, sovereignty',
      lest: 'pleases',
      trouthe: 'solemn word, truth',
      meeke: 'humble, obedient',
      't’overbide': 'to outlive'
    },
    quotes: [
      {
        quote: '“That he is gentil that dooth gentil dedis.” (l. 1170)',
        meaning: 'True nobility is proven by moral action, not bloodline.',
        ao2: 'Epigrammatic rhyming couplet + polyptoton (“gentil... gentil”) echoes Dante & Boethius.',
        ao3: 'Radical meritocratic challenge to medieval feudal hierarchy & class snobbery.'
      },
      {
        quote: '“I put me in youre wise governance... / ‘Thanne have I gete of yow maistrie,’ quod she” (ll. 1231, 1236)',
        meaning: 'The Knight yields rule to his wife, granting her sovereignty.',
        ao2: 'Structural symmetry: the rapist who stole power learns to surrender “governance”.',
        ao3: 'Resolves the Tale’s life-question (l. 1038) — though the hag’s obedience (l. 1255) complicates pure feminism.'
      },
      {
        quote: '“And eek I praye Jhesu shorte hir lives / That wol nat be governed by hir wives” (ll. 1261–62)',
        meaning: 'May Jesus shorten the lives of husbands who won’t be ruled by their wives!',
        ao2: 'Abrupt tonal snap from romance fairy-tale back to Alisoun’s raucous comic voice.',
        ao3: 'Mock-prayer subverts medieval marriage liturgy (“love, cherish and obey”).'
      }
    ]
  }
];

export const NARRATIVE_BEATS = [
  {
    beat: '0. General Prologue Portrait',
    lines: 'GP ll. 447–478',
    pages: 'Winny pp. 36–37',
    summary: 'Chaucer’s frame sketch: Alisoun from Bath is partially deaf, excels at cloth-making, fights to be first at church offerings, wears scarlet stockings and a shield-wide hat, has 5 husbands, 3 trips to Jerusalem, gap teeth, and knows “the olde daunce” of love.'
  },
  {
    beat: '1. Experience vs. Authority & Remarriage',
    lines: 'll. 1–162',
    pages: 'Winny pp. 38–42',
    summary: 'Covered in P1 & P2. Challenges church bans on remarriage (Cana, Samaritan woman, Solomon, St Paul), defends pleasure and sex organs, and claims wives are “barley-bread” with total power over a husband’s body.'
  },
  {
    beat: '2. Pardoner’s Interruption',
    lines: 'll. 163–192',
    pages: 'Winny pp. 42–43',
    summary: 'The Pardoner jumps in, terrified out of marrying (“What sholde I bye it on my flessh so deere?”); Alisoun warns he hasn’t heard half her “tonne” yet and asks the pilgrims not to take offence since she speaks “for to pleye”.'
  },
  {
    beat: '3. Three Old Rich Husbands & Theophrastus Tirade',
    lines: 'll. 193–378',
    pages: 'Winny pp. 43–49',
    summary: 'Covered in P3 & P4. Note ll. 235–302 & 348–378: Alisoun vents a long string of antifeminist accusations (comparing wives to leaking roofs, cats, wild fire, barren hell, worms) — ironically lifted from St Jerome’s Theophrastus — pretending her old husbands shouted them while drunk.'
  },
  {
    beat: '4. Tactical Gaslighting & Bedroom Ransom',
    lines: 'll. 379–452',
    pages: 'Winny pp. 49–51',
    summary: 'Covered in P5 (ll. 409–19). Explains how she framed her old husbands first (“first to mille comth, first grint”), withheld sex until paid (“al is for to selle”), and mocked them as “Wilkin, oure sheep”.'
  },
  {
    beat: '5. The 4th Husband (The Reveller) & Aging',
    lines: 'll. 453–502',
    pages: 'Winny pp. 51–52',
    summary: 'Covered in P5. Recalls her youthful dancing/wine (“likerous mouth... likerous tail”), laments aging (“flour is goon / bren”), and describes torturing her unfaithful 4th husband with jealousy until he died while she returned from Jerusalem.'
  },
  {
    beat: '6. Courting Jankin (The 5th Husband)',
    lines: 'll. 503–626',
    pages: 'Winny pp. 53–56',
    summary: 'Covered in P6. Explains she loved Jankin best because he played hard to get (“daungerous”); confides in her gossip Dame Alison; walks in Lent in scarlet clothes; tricks Jankin with a fake dream of blood=gold; eyes his legs at the 4th funeral; explains her Venus/Mars horoscope.'
  },
  {
    beat: '7. Jankin’s Book of Wicked Wives & Classical Exempla',
    lines: 'll. 627–787',
    pages: 'Winny pp. 56–61',
    summary: 'Covered in P7 (ll. 685–720). Gives Jankin all her land and instantly regrets it. He lectures her with Roman divorce stories and reads nightly from his anthology (Eva, Delilah, Deianira, Xantippe, Pasiphae, Clytemnestra, Livia, Solomon’s Proverbs: better a dragon than a nagging wife).'
  },
  {
    beat: '8. The Physical Fight & Victory',
    lines: 'll. 788–828',
    pages: 'Winny pp. 61–62',
    summary: 'Covered in P8. Rips 3 pages, knocks Jankin in the fire, gets struck deaf, plays dead to win total control (“al the bridel in myn hond”) and burns his book.'
  },
  {
    beat: '9. Friar–Summoner Squabble (Link to Tale)',
    lines: 'll. 829–856',
    pages: 'Winny pp. 62–63',
    summary: 'The Friar laughs at how long the Prologue was; the Summoner insults him (“a flie and eek a frere / Wol falle in every dissh”); the Host yells “Pees!” so Alisoun can begin her Tale.'
  },
  {
    beat: '10. Fairies vs. Friars, Rape, Quest & Midas Digression',
    lines: 'll. 857–1022',
    pages: 'Winny pp. 64–68',
    summary: 'Covered in P9 (ll. 857–918). Knight hears contradictory answers during his year-long search (riches, flattery, freedom), triggering Alisoun’s Ovidian digression on King Midas’s ass-ears (ll. 951–982: proving women can’t keep secrets!). Returning home, he sees 24 dancing ladies vanish, leaving a hideous old hag who trades the answer for a blind promise.'
  },
  {
    beat: '11. Courtroom Victory, Wedding Night, Gentillesse & Magic Happy Ending',
    lines: 'll. 1023–1264',
    pages: 'Winny pp. 69–76',
    summary: 'Covered in P10. Knight answers “sovereinetee” and the female court spares him; the hag demands marriage. On the wedding night he writhes in disgust at her ugliness, age, and low birth; she delivers her 67-line sermon on “gentillesse”, poverty, and old age, offers the Ugly+Faithful vs. Young+Risky dilemma, wins his submission, turns young & faithful, and Alisoun ends with a curse on stingy/stubborn husbands.'
  }
];
