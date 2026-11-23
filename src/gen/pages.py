# Génère les sections HTML des pages civilisation, abolitions, débat, aujourd'hui.
import html
def fiche(items):
    return '<dl class="fiche">'+''.join(f'<div><dt>{k}</dt><dd>{v}</dd></div>' for k,v in items)+'</dl>'
def sec(h,ps):
    return f'<div class="stack read"><h2>{h}</h2>'+''.join(f'<p>{p}</p>' for p in ps)+'</div>'
def callout(t,p,blue=False):
    return f'<div class="callout{" blue" if blue else ""} read"><strong>{t}</strong><p>{p}</p></div>'
def debate(h,a,b):
    return f'<div class="stack"><h2>{h}</h2><div class="debate"><div><h3>{a[0]}</h3><p>{a[1]}</p></div><div><h3>{b[0]}</h3><p>{b[1]}</p></div></div></div>'
def bars(h,rows,note,maxv):
    r=''
    for lab,v,txt,*rng in rows:
        w=100*v/maxv
        extra=''
        if rng: extra=f'<span class="range" style="left:{w:.1f}%;width:{100*(rng[0]-v)/maxv:.1f}%"></span>'
        r+=f'<div class="srow"><span>{lab}</span><div class="sbar"><span style="left:0;width:{w:.1f}%"></span>{extra}</div><span class="v">{txt}</span></div>'
    return f'<div class="stack"><h2>{h}</h2><div class="scale">{r}</div><p class="muted" style="font-size:.82rem">{note}</p></div>'
def sources(items):
    return '<div class="stack read"><h2>Sources</h2><ul class="src">'+''.join(f'<li>{i}</li>' for i in items)+'</ul></div>'
def page(pid,eyebrow,title,lead,body,back=True):
    b='<a class="back" href="#civilisations">← Toutes les civilisations</a>' if back else ''
    return f'''<section class="view" id="v-{pid}"><div class="wrap stack-lg"><div class="stack read">{b}<span class="eyebrow">{eyebrow}</span><h1>{title}</h1><p class="lead">{lead}</p></div>{''.join(body)}</div></section>\n'''
def a(url,t): return f'<a href="{url}">{t}</a>'
W='https://en.wikipedia.org/wiki/'
P=[]

P.append(page("mesopotamie-egypte","Antiquité · IIIe-Ier millénaire av. J.-C.","Mésopotamie et Égypte ancienne",
"Les plus anciens codes de lois connus encadrent déjà l'esclavage. En Mésopotamie comme en Égypte, on devenait esclave par la guerre, par dettes ou en se vendant pour survivre à la misère.",
[fiche([("Période","IIIe-Ier mill. av. J.-C."),("Volume","Aucune estimation fiable"),("Asservissement","Guerre, dettes, vente de soi ou d'enfants"),("Héréditaire","Non établi"),("Critère racial","Aucun"),("Texte clé","Code de Hammurabi, v. 1753 av. J.-C.")]),
sec("Le Code de Hammurabi",["Le Code distingue trois catégories de personnes : l'<em>awīlum</em> (homme libre de plein droit), le <em>muškēnum</em> et le <em>wardum</em> ou l'<em>amtum</em>, l'esclave homme ou femme. L'esclave y est une propriété vendue avec garanties : les lois 278 à 281 règlent la garantie des ventes, les lois 15 à 20 punissent le recel de fugitifs, et la loi 282 prévoit qu'un esclave qui renie son maître a l'oreille coupée.",
"Une règle souvent citée, la loi 117, libérerait au bout de trois ans la personne vendue pour dettes. Elle reste à vérifier dans une traduction savante. Aucune estimation de la part d'esclaves dans la population mésopotamienne n'existe."]),
sec("Égypte : des serviteurs plus que des esclaves",["Les termes égyptiens traduits par « esclave » désignent plutôt des travailleurs ou des serviteurs. Les esclaves pouvaient posséder des biens et bénéficiaient de certaines protections. Le Nouvel Empire voit un essor de l'esclavage de captifs étrangers venus de Nubie, de Libye et d'Asie.",
"L'esclavage n'était pas le mode de production dominant de l'Égypte."]),
callout("Les pyramides n'ont pas été bâties par des esclaves","Les égyptologues s'accordent : les grandes pyramides ont été construites par des travailleurs réquisitionnés ou rémunérés. Le chiffre de « 100 000 esclaves » rapporté par Hérodote n'est pas étayé.",True),
sources([a(W+"Code_of_Hammurabi","Wikipedia, Code of Hammurabi")+" (2nde main)",a(W+"Slavery_in_ancient_Egypt","Wikipedia, Slavery in ancient Egypt")+" (2nde main)"])]))

P.append(page("grece","Antiquité · VIIIe-IIe s. av. J.-C.","Grèce : Athènes et les hilotes de Sparte",
"La démocratie athénienne reposait en partie sur le travail d'esclaves, majoritairement non grecs. Sparte dominait une population d'hilotes bien plus nombreuse que ses citoyens.",
[fiche([("Athènes","20 000 à 80 000 esclaves (contesté)"),("Sparte","170 000 à 224 000 hilotes"),("Asservissement","Guerre, piraterie, commerce ; conquête pour les hilotes"),("Héréditaire","Oui"),("Critère","Ethnique (non-Grecs), pas racial"),("Affranchissement","Fréquent à Athènes au IVe s.")]),
bars("Athènes : un chiffre très disputé",[("Estimation basse moderne",20000,"≈ 20 000"),("Estimation haute moderne",80000,"80 000 et plus"),("Recensement antique (douteux)",400000,"400 000")],"Barres à l'échelle sur 0-400 000. Le chiffre de 400 000, transmis par Athénée, est rejeté par la plupart des chercheurs.",400000),
sec("Athènes",["Le recensement de Démétrios de Phalère (317-307 av. J.-C.) compte 21 000 citoyens, 10 000 métèques et 400 000 esclaves, un chiffre dont la plupart des historiens doutent. Les estimations modernes vont d'environ 20 000 à 80 000 ou plus. Les mines d'argent du Laurion auraient employé environ 30 000 esclaves.",
"Les esclaves venaient de la guerre, de la piraterie et du commerce, et étaient surtout des « barbares » : sur une liste de 32 esclaves confisqués, 13 étaient thraces. Solon interdit au VIe siècle l'esclavage pour dettes des Athéniens. Aristote théorise l'esclave comme « outil animé » et formule la doctrine de l'esclavage « par nature »."]),
sec("Les hilotes de Sparte",["Propriété collective de l'État, attachés à la terre, les hilotes de Laconie et de Messénie versaient une part de leurs récoltes. Selon Aristote, les éphores leur déclaraient chaque année la guerre, pour que la <em>krypteia</em> puisse les tuer sans souillure religieuse. Thucydide rapporte la disparition d'environ 2 000 hilotes à qui la liberté avait été promise.",
"La Messénie est libérée par Épaminondas en 369 av. J.-C."]),
callout("Esclaves ou serfs ?","Les Anciens eux-mêmes hésitaient : Critias dit les hilotes « esclaves au plus haut point », Pollux les place « entre les hommes libres et les esclaves ». L'historien Jean Ducat parle de servage.",True),
sources([a(W+"Slavery_in_ancient_Greece","Wikipedia, Slavery in ancient Greece")+" (2nde main)",a(W+"Helots","Wikipedia, Helots")+" (2nde main)"])]))

P.append(page("rome","Antiquité · IIe s. av. J.-C. – Ve s.","Rome, une société esclavagiste",
"Rome fut l'une des grandes sociétés esclavagistes de l'histoire : des millions de captifs de guerre ont travaillé dans ses domaines, ses mines et ses maisons. Mais l'esclave affranchi pouvait devenir citoyen.",
[fiche([("Période","IIe s. av. J.-C. – Ve s."),("Italie","1 à 1,5 M (Scheidel) à 3 M (Brunt)"),("Empire (260-425)","≈ 10 à 15 % de la population"),("Asservissement","Guerre, naissance, enfants exposés, piraterie"),("Héréditaire","Oui"),("Critère racial","Aucun"),("Affranchissement","Fréquent, donne la citoyenneté"),("Fin","Glissement vers le colonat et le servage")]),
bars("Combien d'esclaves en Italie ?",[("Keith Hopkins (28 av. J.-C.)",0.8,"0,8 M"),("Walter Scheidel",1,"1-1,5 M",1.5),("Julius Beloch",2,"≈ 2 M"),("Peter Brunt",3,"≈ 3 M")],"Barres à l'échelle sur 0-3 millions. Effectifs à un moment donné, pas des flux.",3),
sec("Une population entretenue par la guerre et la naissance",["Selon Walter Scheidel, constituer la population servile de l'Italie a nécessité 2 à 4 millions d'esclaves importés sur les deux derniers siècles avant notre ère. Environ trois quarts des esclaves italiens seraient toutefois nés esclaves.",
"Juridiquement, l'esclave était une chose (<em>res</em>), sans personnalité juridique, dont le témoignage n'était reçu que sous la torture. La révolte de Spartacus (73-71 av. J.-C.) en est l'épisode le plus célèbre."]),
callout("Rome ressemble au Brésil, pas aux États-Unis","Le rapport entre importations et population servile (environ 3 pour 1) rapproche Rome du Brésil esclavagiste plutôt que du sud des États-Unis, où la population servile est passée de 1,2 million en 1810 à près de 4 millions en 1860 avec seulement 600 000 à 650 000 importations (Scheidel).",True),
sec("Une porte de sortie réelle",["L'affranchissement formel conférait en général la citoyenneté romaine, et les enfants d'affranchis naissaient libres. Il était si fréquent qu'Auguste dut le plafonner par la <em>lex Fufia Caninia</em> (2 av. J.-C.) et la <em>lex Aelia Sentia</em> (4 apr. J.-C.). C'est un contraste majeur avec l'esclavage racial des Amériques."]),
sources([a("https://www.cambridge.org/core/journals/journal-of-roman-studies/article/human-mobility-in-roman-italy-ii-the-slave-population/72D80C5839817A1F4C456A33C9F62E7A","Walter Scheidel, « The slave population », Journal of Roman Studies, 2005"),a(W+"Slavery_in_ancient_Rome","Wikipedia, Slavery in ancient Rome")+" (2nde main ; chiffre pour l'Empire probablement de Kyle Harper, à vérifier)"])]))

P.append(page("chine","Asie · Shang – 1910","Chine : une servitude minoritaire mais millénaire",
"L'esclavage traverse toute l'histoire chinoise, des captifs sacrifiés sous les Shang aux fillettes vendues comme domestiques au XXe siècle, sans jamais devenir le fondement de l'économie.",
[fiche([("Période","Shang – 1909/1910"),("Volume","Faible part ; ≈ 2 M à la conquête Qing"),("Asservissement","Punition, guerre, dettes, vente d'enfants"),("Héréditaire","Pour certains groupes"),("Critère racial","Non"),("Fin","1909-1910 ; pratiques jusqu'en 1949")]),
sec("Des Han aux Qing",["Sous les Han, les esclaves ne représentent qu'« une très petite partie de la population », et leur possession est plafonnée : 200 pour les rois et ducs, 30 pour les fonctionnaires. L'usurpateur Wang Mang abolit l'esclavage en 9 apr. J.-C., puis le rétablit en 12.",
"Le droit Tang interdit d'asservir les personnes libres, mais l'autorise pour les criminels, les étrangers et les orphelins, rangés parmi les « gens vils » assimilés juridiquement au bétail. À la conquête mandchoue, les Qing comptent environ 2 millions d'esclaves. L'empereur Yongzheng libère la plupart des groupes serviles héréditaires entre 1723 et 1730."]),
callout("Une abolition tardive et incomplète","L'esclavage est aboli officiellement en 1909 (1910 selon certaines sources), mais la pratique persiste jusqu'en 1949, notamment avec les <em>mui tsai</em>, fillettes vendues comme domestiques."),
sources([a(W+"Slavery_in_China","Wikipedia, Slavery in China")+" (2nde main)"])]))

P.append(page("coree","Asie · 918 – 1894","Corée : les nobi, jusqu'à 40 % de la population",
"Sous la dynastie Joseon, la Corée a compté l'une des plus fortes proportions de population servile au monde. Mais la nature de ce système, plus proche du servage pour beaucoup d'historiens, reste débattue.",
[fiche([("Période","918 – 1894"),("Part de la population","≥ 30 % (XVe-XVIIe s.), jusqu'à 40 % au sud"),("En 1858","≈ 1,5 %"),("Asservissement","Dettes, famine, naissance"),("Héréditaire","Oui"),("Critère racial","Non (nobi coréens)"),("Fin","1801, 1886-1887, 1894")]),
bars("La part des nobi dans la population",[("Avant les Joseon",10,"≤ 10 %"),("XVe-XVIIe s.",30,"30-40 %",40),("1858",1.5,"≈ 1,5 %")],"Barres à l'échelle sur 0-40 %. Sources : Kye (2021), Kim Sun Joo (2023), Kim (2003).",40),
sec("Un statut héréditaire",["Le statut de nobi se transmettait par la naissance et s'alimentait des dettes et des ventes de soi en temps de famine. Un registre de Séoul de 1663 compte 73 % de nobi parmi les résidents enregistrés, mais c'est un échantillon local.",
"Les nobi d'État sont libérés en 1801. Le statut héréditaire est aboli en 1886-1887 et le système disparaît en 1894 avec la réforme Gabo."]),
debate("Esclaves ou serfs ?",("Le critère numérique","Avec 30 à 40 % de la population, la Corée des Joseon se range parmi les grandes sociétés esclavagistes, au niveau du sud des États-Unis ou de Rome."),("Les droits et l'intégration","Les nobi pouvaient détenir des biens et des terres, et ceux qui vivaient hors de chez le maître avaient leur propre foyer. Kim parle d'un « servage développé sous l'esclavage », James Palais les juge plus proches des serfs, Rhee et Yang jugent le mot « esclave » inapproprié.")),
sources([a(W+"Slavery_in_Korea","Wikipedia, Slavery in Korea")+" (2nde main, résume Kye 2021, Kim 2023, Palais 1998)"])]))

P.append(page("inde","Asie · XIIIe s. – 1861","Inde : sultanats, servitude agraire et abolition britannique",
"Dans le sous-continent, l'esclavage a pris la forme de captifs de guerre sous les sultanats, d'exportations vers l'Asie centrale et d'une servitude agraire héréditaire qui frappait les basses castes.",
[fiche([("Période","Sultanat de Delhi – 1861"),("Vers 1840","1,1 M à 8-9 M selon la définition"),("Asservissement","Guerre, défaut fiscal, servitude agraire"),("Héréditaire","Oui (servitude agraire)"),("Critère","Recoupe la caste, pas racial"),("Fin","1843, Code pénal de 1861")]),
sec("Des chiffres de chroniques",["Les chroniques du sultanat de Delhi avancent des chiffres probablement gonflés : 50 000 jeunes esclaves sous Alauddin Khalji, 180 000 sous Firuz Shah Tughluq. L'historien Scott Levi rattache l'exportation d'Hindous vers l'Asie centrale à la construction des États sultanien et moghol. Au XVIIe siècle, la Compagnie néerlandaise des Indes exportait aussi 150 à 400 esclaves par an depuis l'Arakan et le Bengale."]),
callout("Pourquoi les estimations varient de 1 à 8","Pour les années 1840, les estimations vont d'environ 1,1 million à 8-9 millions (Bartle Frere, 1841). Tout dépend de la définition : compte-t-on comme esclaves les travailleurs agricoles asservis des basses castes, comme les Pulayar ou les Paraiyar ?",True),
sec("L'abolition « par le déni »",["L'Inde britannique retire la reconnaissance légale de l'esclavage en 1843, puis le criminalise en pratique par le Code pénal de 1861. L'historienne Indrani Chatterjee parle d'« abolition par le déni », car la servitude agraire a largement survécu."]),
sources([a(W+"Slavery_in_India","Wikipedia, Slavery in India")+" (2nde main)"])]))

P.append(page("siam","Asie du Sud-Est · XVIIe s. – 1915","Siam et archipel : dettes et razzias",
"Au Siam, l'esclavage était surtout une servitude pour dettes, rachetable. Dans l'archipel philippin, les flottes de Sulu razziaient les côtes de toute l'Asie du Sud-Est.",
[fiche([("Siam vers 1854","1/4 à 1/3 de la population (Pallegoix)"),("Sulu, 1770-1870","200 000 à 300 000 asservis"),("Asservissement","Dettes, guerre, razzias maritimes"),("Héréditaire","Possible"),("Critère racial","Non"),("Fin au Siam","1874 → 1905 → 1915")]),
sec("Le Siam : une servitude rachetable",["Vers 1854, Mgr Pallegoix estime qu'un quart à un tiers des quelque 6 millions d'habitants sont des esclaves pour dettes. C'est une estimation d'observateur, pas un recensement.",
"Les maîtres ne pouvaient ni tuer ni mutiler leurs esclaves, qui pouvaient posséder, hériter, contracter, aller en justice et se racheter. L'historien Cruikshank juge le modèle occidental d'esclavage inadapté à ce système."]),
sec("L'abolition graduelle de Chulalongkorn",["Le roi Chulalongkorn mène une abolition par étapes. Le décret de 1874 libère à 21 ans les enfants nés esclaves après 1868. La loi d'abolition date de 1905, le Code pénal de 1908 criminalise la vente, et l'esclavage prend fin légalement en 1915."]),
sec("Les razzias de Sulu",["Les flottes iranun et banguingui des sultanats de Sulu et de Maguindanao auraient asservi 200 000 à 300 000 personnes entre 1770 et 1870, en razziant jusqu'au détroit de Malacca, Java et le sud de la Chine. Le mot malais <em>lanun</em>, « pirate », vient du nom des Iranun."]),
sources([a("https://thesiamsociety.org/wp-content/uploads/1975/03/JSS_063_2j_Cruikshank_SlaveryIn19thCenturySiam.pdf","R. B. Cruikshank, « Slavery in Nineteenth Century Siam », Journal of the Siam Society, 1975"),a(W+"Slavery_in_Thailand","Wikipedia, Slavery in Thailand")+" (2nde main)",a(W+"Slavery_in_the_Philippines","Wikipedia, Slavery in the Philippines")+" (2nde main)"])]))

P.append(page("asie-centrale","Asie centrale · XVIe s. – 1873","Khiva et Boukhara, marchés d'esclaves",
"Jusqu'à la conquête russe, les khanats de Khiva et de Boukhara étaient de grands marchés d'esclaves, alimentés par les raids turkmènes et kazakhs contre les Persans et les colons russes.",
[fiche([("Période","XVIe s. – 1873"),("Volume","≈ 1 M de Persans (1re moitié XIXe s.), faiblement sourcé"),("Asservissement","Raids turkmènes et kazakhs"),("Critère","Religieux : chiites et chrétiens"),("Fin","1873, sous pression russe")]),
sec("La religion comme frontière",["L'islam interdisant d'asservir des musulmans, les khanats sunnites traitaient les Persans chiites comme des cibles licites, tout comme les chrétiens. Le missionnaire Josef Wolff comptait 200 000 esclaves persans à Boukhara dans les années 1840."]),
callout("Des chiffres fragiles","Le chiffre d'environ 1 million de Persans asservis et celui de Wolff reposent sur des récits de voyageurs. Ils sont à prendre comme des ordres de grandeur."),
sec("La fin",["Les esclaves russes sont libérés en 1840 sous la pression de Saint-Pétersbourg. La conquête russe de Khiva en 1873 provoque une révolte des esclaves et l'abolition exigée par le général Kaufman."]),
sources([a(W+"Khivan_slave_trade","Wikipedia, Khivan slave trade")+" (2nde main)","Jeff Eden, <em>Slavery and Empire in Central Asia</em>, Cambridge UP, 2018 ("+a("https://dash.harvard.edu/bitstream/handle/1/33493418/EDEN-DISSERTATION-2016.pdf","thèse")+")"])]))

P.append(page("afrique","Afrique · XVIIe s. – 1981","Les sociétés esclavagistes africaines",
"L'esclavage existait en Afrique avant les traites et s'y est même intensifié au XIXe siècle. Des États comme le califat de Sokoto ou le royaume du Dahomey comptaient parmi les grandes sociétés esclavagistes de leur temps.",
[fiche([("Sokoto vers 1900","1 à 2,5 M d'esclaves, 1/4 à 1/2 de la population"),("Éthiopie vers 1932","≥ 2 M d'esclaves (Anti-Slavery Society)"),("Asservissement","Guerre, razzias, tribut, dettes"),("Héréditaire","Souvent"),("Critère racial","Non"),("Fin","1901 (Nigeria du Nord), 1942 (Éthiopie), 1981 (Mauritanie)")]),
sec("Le califat de Sokoto",["Fondé au début du XIXe siècle dans l'actuel nord du Nigeria, le califat comptait vers 1900 au moins 1 million et peut-être 2,5 millions d'esclaves. Jan Hogendorn et Paul Lovejoy estiment leur part entre un quart et la moitié d'une population d'environ 10 millions. Sokoto se place ainsi parmi les grandes sociétés esclavagistes modernes, derrière les États-Unis de 1860 (environ 4 millions) et le Brésil.",
"Le Britannique Lugard abolit le statut légal d'esclave en 1901, sans indemnité."]),
sec("Le Dahomey, acteur de la traite atlantique",["La traite fournissait l'essentiel des revenus royaux du Dahomey. Le roi Ghezo ne signe qu'après le blocus britannique de 1851-1852 un traité qui met fin aux exportations, et celles-ci reprennent en 1857-1858. À la cour, un vrai débat opposait les partisans de la traite à ceux d'une reconversion vers l'huile de palme. Les ports de Ouidah, Bonny et Luanda ont expédié ensemble plus de 2 millions de captifs vers l'Atlantique."]),
callout("Ne pas généraliser","La part d'« un quart à la moitié » d'esclaves vaut pour les grands États esclavagistes du XIXe siècle, pas pour toute l'Afrique.",True),
sec("Éthiopie et Mauritanie : les dernières abolitions",["L'Éthiopie est admise à la Société des Nations en 1923 à condition de supprimer l'esclavage. Les lois italiennes de 1935-1936 libèrent environ 420 000 esclaves, et Haïlé Sélassié abolit l'esclavage le 26 août 1942.",
"En Mauritanie, l'abolition française de 1905 n'est pas appliquée. Un décret de 1981 abolit l'esclavage sans sanction pénale, et une loi de 2007 le criminalise. Les estimations actuelles divergent : 90 000 personnes selon le Global Slavery Index 2018, 600 000 selon la BBC en 2017."]),
sources([a(W+"Sokoto_Caliphate","Wikipedia, Sokoto Caliphate")+" (2nde main, Hogendorn et Lovejoy)",a(W+"History_of_the_Kingdom_of_Dahomey","Wikipedia, Kingdom of Dahomey")+" (2nde main)",a(W+"Slavery_in_Ethiopia","Wikipedia, Slavery in Ethiopia")+" (2nde main)",a(W+"Slavery_in_Mauritania","Wikipedia, Slavery in Mauritania")+" (2nde main)",a("https://www.aehnetwork.org/wp-content/uploads/2020/05/Ronnback_Slave_Trades_out_of_Africa.pdf","Klas Rönnbäck, « Slave trades out of Africa »")])]))

P.append(page("europe-medievale","Europe · IXe – XVIIIe s.","Europe médiévale, Vikings et Méditerranée",
"Le mot « esclave » vient de « Slave » : au Moyen Âge, les captifs d'Europe de l'Est étaient vendus vers le monde islamique et Byzance. L'esclavage a ensuite décliné à l'Ouest, mais pas en Méditerranée.",
[fiche([("Période","IXe – XVIIIe s."),("Angleterre, 1086","≈ 10 % de la population (Domesday Book)"),("Séville, 1565","≈ 7,4 % de la population"),("Asservissement","Guerre, razzias vikings, traite de la mer Noire"),("Critère","Religieux, puis de plus en plus africain"),("Fin","1102 (Angleterre), 1334 (Suède), Malte 1798")]),
sec("Vikings et Slaves",["Du IXe au XIe siècle, les Vikings capturent des Irlandais, des Anglo-Saxons et des Francs, et acheminent des captifs slaves par la Volga et le Dniepr vers le califat abbasside et Byzance. Dublin devient un grand marché. Le projet d'Oxford « Dirhams for Slaves » estime que les esclaves comptaient parmi les principales exportations de l'Europe du Nord.",
"Au Xe siècle, les Slaves sont le groupe le plus présent dans la traite, d'où le latin <em>sclavus</em> puis le français « esclave » (William Phillips)."]),
sec("Du déclin à l'Ouest à la traite méditerranéenne",["En Europe occidentale, l'esclavage recule entre le Xe et le XIIe siècle au profit du servage : la traite est interdite en Angleterre en 1102, la Suède abolit l'esclavage en 1334.",
"La Méditerranée garde des esclaves jusqu'à l'époque moderne. Venise et Gênes dominent la traite de la mer Noire à partir du XIIIe siècle, avec Caffa en Crimée pour grand marché. Au moins 10 000 esclaves sont vendus à Venise entre 1414 et 1423. En 1565, Séville compte 6 327 esclaves pour 85 538 habitants, majoritairement africains."]),
callout("Le chaînon vers l'Atlantique","La première razzia portugaise en Afrique subsaharienne date de 1441. L'esclavage ibérique fait le lien entre la Méditerranée médiévale et la traite atlantique.",True),
sources([a(W+"Slavery_in_medieval_Europe","Wikipedia, Slavery in medieval Europe")+" (2nde main)",a("https://historyireland.com/?p=10176","History Ireland"),a("https://krc.web.ox.ac.uk/node/309951","Oxford, Dirhams for Slaves")])]))

P.append(page("ottomans","Empire ottoman · XIVe s. – 1908","L'Empire ottoman : soldats, harem et domesticité",
"Dans l'Empire ottoman, l'esclavage était d'abord politique et domestique : soldats d'élite, concubines du harem, eunuques et serviteurs. Un cinquième de la population de Constantinople était esclave à son apogée.",
[fiche([("Période","XIVe s. – 1908 (fin du système datée de 1924)"),("Constantinople","≈ 1/5 de la population (XVIe-XVIIe s.)"),("Esclaves soldats","≈ 100 000 kapıkulu en 1609"),("Asservissement","Raids tatars, devchirmé, achats caucasiens et africains"),("Critère","Prix et fonctions selon l'origine"),("Affranchissement","Fréquent ; ascension sociale possible")]),
sec("Des esclaves au sommet de l'État",["Les <em>kapıkulu</em>, esclaves de la Porte, dont les janissaires recrutés par le devchirmé, « impôt du sang » prélevé sur les garçons chrétiens des Balkans et d'Anatolie, sont environ 100 000 en 1609. Des esclaves pouvaient devenir vizirs."]),
sec("Le harem et les eunuques",["Les concubines du harem étaient achetées, le plus souvent d'origine chrétienne : Circassiennes, Abkhazes, Géorgiennes. Les eunuques noirs venaient d'Afrique subsaharienne, les blancs des Balkans ou du Caucase. Les prix variaient selon l'origine : une jeune fille blanche pour le service domestique coûtait environ 3 000 kuruş, une Africaine 1 500 à 2 500 (Madeline Zilfi)."]),
sec("Une abolition largement nominale",["Firman de 1830 sur les esclaves blancs, fermeture « cosmétique » du marché d'Istanbul en 1847, interdiction de la traite circassienne et géorgienne en 1854-1855, puis de la traite des Noirs en 1857, non appliquée à Tripoli avant les années 1890. Des femmes esclaves sont encore vendues en 1908."]),
sources([a(W+"Slavery_in_the_Ottoman_Empire","Wikipedia, Slavery in the Ottoman Empire")+" (2nde main)","Madeline Zilfi, <em>Women and Slavery in the Late Ottoman Empire</em>, Cambridge UP, 2010"])]))

P.append(page("tatars","Europe de l'Est · 1441-1783","Les raids tatars de Crimée",
"Pendant plus de trois siècles, les cavaliers tatars et nogaïs ont razzié la Pologne-Lituanie, l'Ukraine et la Moscovie pour alimenter les marchés d'esclaves de Crimée et de l'Empire ottoman. C'est l'une des plus grandes traites de l'époque moderne, et l'une des moins connues en France.",
[fiche([("Période","1441 – 1783"),("Volume estimé","2 à 5 M de captifs"),("Grand marché","Caffa, ≈ 20 000 ventes par an vers 1570"),("Asservissement","Razzias"),("Critère","Religieux (chrétiens)"),("Sortie","Rachat"),("Fin","Annexion russe de la Crimée, 1783")]),
bars("Combien de captifs ?",[("Baranowski (Pologne-Lituanie seule)",1,"≤ 1 M"),("İnalcık et Kołodziejczyk (1500-1700)",2,"≈ 2 M"),("Charnysh et Lall, décompte",3.64,"≥ 3,64 M"),("Charnysh et Lall, avec données manquantes",5,"≈ 5 M")],"Barres à l'échelle sur 0-5 millions. Flux cumulés.",5),
sec("Une saignée pour l'Europe orientale",["Selon l'étude de Volha Charnysh et Ranjit Lall (<em>American Political Science Review</em>, 2026), au moins 3,64 millions de personnes ont été capturées entre 1441 et 1774, et environ 5 millions si l'on estime les données manquantes. Cela représenterait plus d'un quart de la population de l'Europe orientale en 1400.",
"Orest Subtelny note que certains raids emmenaient jusqu'à 30 000 personnes, mais que la moyenne tournait plutôt autour de 3 000. À Caffa, sous contrôle ottoman à partir de 1475, près de 20 000 esclaves étaient vendus chaque année dans les années 1570 (Halil İnalcık)."]),
callout("Une estimation nouvelle, encore à discuter","L'étude Charnysh-Lall est la plus récente et la plus élevée ; elle n'a pas encore été débattue par les spécialistes. L'historien Alan Fisher juge qu'aucun total fiable ne peut être calculé, les sources gonflant les nombres."),
sources([a(W+"Crimean-Nogai_Raids","Wikipedia, Crimean–Nogai slave raids")+" (2nde main)",a(W+"Slavery_in_the_Ottoman_Empire","Wikipedia, Slavery in the Ottoman Empire")+" (2nde main)","Charnysh et Lall, <em>American Political Science Review</em>, 2026 (publication à confirmer)"])]))

P.append(page("russie","Russie · 1450-1861","Russie : des kholops aux serfs",
"La Russie a connu un esclavage proprement dit, le <em>kholopstvo</em>, puis un servage de masse qui touchait plus d'un tiers de la population en 1857. Les serfs russes ont été libérés en 1861, quatre ans avant les esclaves américains.",
[fiche([("Kholops","≈ 10 % de la population moscovite (Hellie)"),("Serfs privés, 1857","23,1 M sur 62,5 M (≈ 37,7 %)"),("Asservissement","Vente de soi, dettes, capture ; servage par la loi"),("Héréditaire","Oui"),("Critère racial","Non"),("Fin","1679/1723 (kholops), 1861 (serfs)")]),
sec("Les kholops, des Russes qui se vendaient eux-mêmes",["Selon Richard Hellie, les kholops auraient représenté environ 10 % de la population moscovite. Il y voit « l'un des systèmes esclavagistes les plus singuliers du monde », car les esclaves étaient majoritairement des Russes qui se vendaient eux-mêmes. Les kholops agricoles sont fondus dans le servage en 1679, les domestiques en 1723."]),
sec("Le servage",["Codifié en 1649, le servage attache les paysans à la terre et donne aux propriétaires des droits quasi totaux. Les serfs pouvaient être cédés sans la terre, mais gardaient des protections sur leurs biens, leur religion et un accès aux tribunaux. Alexandre II abolit le servage en 1861 ; les anciens serfs paient souvent leur terre plus cher que le marché, et les annuités de rachat ne sont supprimées qu'en 1907."]),
callout("1861 et 1865 : deux abolitions, deux systèmes","La comparaison entre servage russe et esclavage américain, menée par Peter Kolchin, est éclairante mais discutée. Les serfs, de même nationalité et religion que leurs maîtres, n'étaient ni juridiquement des biens meubles ni assignés par la race.",True),
sources([a("https://www.historytoday.com/archive/slaves-not-serfs","History Today, « Slaves, not serfs »")+" (sur Hellie)",a(W+"Serfdom_in_Russia","Wikipedia, Serfdom in Russia")+" (2nde main)",a(W+"Kholop","Wikipedia, Kholop")+" (2nde main)"])]))

P.append(page("ameriques","Amériques · XIVe – XIXe s.","Les Amériques avant et après Colomb",
"Les sociétés amérindiennes connaissaient des formes variées de servitude. La colonisation a ensuite asservi des millions d'Amérindiens, et certaines nations amérindiennes ont elles-mêmes possédé des esclaves noirs.",
[fiche([("Aztèques","Statut non héréditaire, enfants nés libres"),("Côte Nord-Ouest","Jusqu'à 1/4 de la population servile"),("Amérindiens asservis","2,5 à 5 M en quatre siècles (Reséndez)"),("Caroline, 1670-1715","24 000 à 51 000 exportés (Gallay)"),("Critère","Aucun avant 1492 ; puis racial"),("Fin","Conquête ; persistances jusqu'au XIXe s.")]),
sec("Aztèques et Incas",["Chez les Aztèques, on devenait <em>tlacotli</em> par punition, guerre, dettes ou vente de soi, par exemple pendant la famine des années 1450. L'esclave pouvait se marier, posséder des biens et même des esclaves, et ses enfants naissaient libres (Ross Hassig). Mais des captifs étaient sacrifiés, et un esclave « incorrigible » revendu trois fois pouvait l'être pour le sacrifice.",
"Chez les Incas, les <em>yanakuna</em> forment une servitude héréditaire, parfois de haut statut ; le mot « esclave » est une traduction discutée."]),
sec("La côte Nord-Ouest",["Sur la côte Pacifique de l'Amérique du Nord, l'esclavage était intégré à des sociétés de chasseurs-pêcheurs et au potlatch. Leland Donald montre que cette servitude correspond à une définition interculturelle de l'esclavage ; dans certains groupes, jusqu'à un quart de la population était esclave."]),
sec("L'« autre esclavage »",["Andrés Reséndez (<em>The Other Slavery</em>, prix Bancroft 2017) estime à 2,5 à 5 millions le nombre d'Amérindiens asservis en quatre siècles. Sa définition, large, englobe l'encomienda, le repartimiento, le péonage pour dettes et le travail forcé qui ont survécu aux interdictions légales. Alan Gallay estime que 24 000 à 51 000 Amérindiens ont été exportés depuis les ports de Caroline entre 1670 et 1715.",
"Enfin, les « Cinq Tribus » (Cherokees, Creeks, Choctaws, Chickasaws, Séminoles) possédaient 4 500 à 5 000 esclaves noirs en Territoire indien vers 1839."]),
sources([a(W+"Slavery_in_the_Aztec_Empire","Wikipedia, Slavery in the Aztec Empire")+" (2nde main)",a("https://www.ucpress.edu/books/aboriginal-slavery-on-the-northwest-coast-of-north-america/hardcover","Leland Donald, Aboriginal Slavery on the Northwest Coast, UC Press, 1997"),a(W+"The_Other_Slavery","Wikipedia, The Other Slavery")+" (2nde main)",a(W+"Slavery_among_Native_Americans_in_the_United_States","Wikipedia, Slavery among Native Americans")+" (2nde main)"])]))

# ABOLITIONS
AB=[("VIe s. av. J.-C.","Athènes","Solon interdit l'esclavage pour dettes des Athéniens.",""),
("9 apr. J.-C.","Chine","Wang Mang abolit l'esclavage, rétabli en 12.",""),
("1102","Angleterre","Interdiction de la traite.",""),
("1334","Suède","Abolition de l'esclavage.",""),
("1723-1730","Chine","Yongzheng libère la plupart des groupes serviles héréditaires.",""),
("1794","France","Abolition de l'esclavage le 4 février ; la traite est rétablie par Bonaparte en 1802.",""),
("1801","Corée","Libération des nobi d'État.",""),
("1807","Grande-Bretagne","Abolition de la traite ; la Royal Navy la combat jusqu'en 1867.",""),
("1816","Alger","Bombardement par lord Exmouth et libération d'esclaves européens.",""),
("1833","Grande-Bretagne","Abolition de l'esclavage ; 20 M£ versés aux propriétaires.",""),
("1843","Inde britannique","Fin de la reconnaissance légale de l'esclavage.",""),
("1848","France","Abolition définitive (Victor Schœlcher).","à vérifier"),
("1857","Empire ottoman","Interdiction de la traite des Noirs, longtemps peu appliquée.",""),
("1861","Russie","Abolition du servage.",""),
("1865","États-Unis","13e amendement.","à vérifier"),
("1873","Khiva","Abolition après la conquête russe.",""),
("1888","Brésil","Loi d'or : dernière abolition des Amériques.","à vérifier"),
("1894","Corée","Réforme Gabo.",""),
("1897","Zanzibar","Abolition, étendue aux concubines en 1909.",""),
("1901","Nigeria du Nord","Fin du statut légal d'esclave à Sokoto.",""),
("1909-1910","Chine","Abolition officielle.",""),
("1915","Siam","Fin légale, après la loi de 1905.",""),
("1929","Iran, Jordanie","Abolition.",""),
("1942","Éthiopie","Abolition par Haïlé Sélassié.",""),
("1949-1952","Koweït, Qatar","Abolition.",""),
("1962","Arabie saoudite, Yémen","Abolition.",""),
("1970","Oman","Abolition sous le sultan Qabous.",""),
("1981","Mauritanie","Abolition par décret, sans sanction pénale.",""),
("2007","Mauritanie","L'esclavage devient un crime.","")]
lis=''.join(f'<li><span class="yr">{y}</span><span><strong>{w}</strong> · {t}{" <span class=\"pill flag\">"+f+"</span>" if f else ""}</span></li>' for y,w,t,f in AB)
P.append(page("abolitions","Frise · de Solon à 2007","Les abolitions",
"L'abolition de l'esclavage comme politique d'État, portée à l'échelle mondiale, est née dans les sociétés atlantiques au XIXe siècle. La plupart des abolitions africaines, ottomanes et arabes ont été obtenues sous pression britannique ou internationale, parfois très tard.",
[f'<div class="stack"><ol class="timeline">{lis}</ol></div>',
debate("Deux constats à garder côte à côte",("Un mouvement né en Occident","Le Royaume-Uni a consacré à la lutte contre la traite des moyens considérables : de 1808 à 1867, le West Africa Squadron capture environ 1 600 navires et libère environ 150 000 Africains. Kaufmann et Pape y voient « de loin l'action morale internationale la plus coûteuse de l'histoire moderne »."),("Payé aux maîtres, pas aux victimes","Les abolitions britannique et française ont indemnisé les propriétaires, jamais les esclaves. À Haïti, ce sont les anciens esclaves qui ont payé une indemnité aux colons, jusqu'en 1921-1922. La lutte contre la traite a aussi servi à justifier la colonisation de l'Afrique.")),
sources([a(W+"History_of_slavery_in_the_Muslim_world","Wikipedia, History of slavery in the Muslim world")+" (2nde main)",a("https://www.ucl.ac.uk/lbs/project/context/","UCL, Legacies of British Slavery"),a("https://heritage.bnf.fr/france-ameriques/en/slave-trade-1","BnF Heritage"),"Dates de 1848, 1865 et 1888 : repères usuels, à vérifier dans une source primaire."])],back=False))

P.append(page("debat","Historiographie et mémoire","Pourquoi la mémoire occidentale se concentre sur la traite atlantique",
"Si l'esclavage a été universel, pourquoi le débat public en France, au Royaume-Uni ou aux États-Unis porte-t-il presque uniquement sur la traite atlantique ? Les historiens avancent plusieurs raisons, et s'opposent sur l'intérêt de la comparaison.",
[sec("Quatre raisons",["<strong>Les descendants sont des citoyens.</strong> Les descendants des esclaves de l'Atlantique vivent dans les sociétés qui les ont asservis ou qui en sont issues (Antilles, États-Unis, Brésil, Haïti) et y portent des revendications de mémoire et de réparation : plan en dix points de la CARICOM (2014), année 2025 des réparations de l'Union africaine. Les traites orientales ont laissé peu de diasporas visibles.",
"<strong>Les États légifèrent sur leurs propres crimes.</strong> La loi Taubira du 21 mai 2001 reconnaît comme crime contre l'humanité la traite transatlantique, la traite dans l'océan Indien et l'esclavage « perpétrés à partir du XVe siècle » ; elle ne nomme ni les traites transsahariennes ni les traites intra-africaines.",
"<strong>C'est la traite la mieux documentée.</strong> Elle est la seule reconstituée voyage par voyage dans une base de données publique.",
"<strong>La tradition d'autocritique des démocraties</strong> est souvent invoquée, mais aucune étude spécifique ne l'établit : c'est une hypothèse."]),
debate("Comparer ou singulariser : les meilleurs arguments",("Pour une histoire globale","Olivier Pétré-Grenouilleau (<em>Les Traites négrières</em>, 2004) avance environ 11 millions de déportés atlantiques, 17 millions pour les traites orientales et 14 millions pour les traites intra-africaines. L'esclavage est une institution quasi universelle, des États africains en ont été acteurs, et une histoire centrée sur l'Europe reste paradoxalement eurocentrée. Il refuse toute « échelle de Richter des souffrances » et juge que les traites ne sont pas des génocides, car elles visaient à exploiter, non à exterminer."),("Pour la spécificité atlantique","Le système atlantique fut qualitativement différent : esclave bien meuble valant 30 à 60 % d'une plantation, statut héréditaire assigné par la couleur, décroissance naturelle de 20 % par décennie aux Caraïbes, tout cela au cœur de sociétés qui proclamaient la liberté et l'égalité. Ses effets se prolongent : racisme, dettes comme celle d'Haïti, inégalités.")),
sec("L'affaire Pétré-Grenouilleau",["En 2005, le Collectif des Antillais-Guyanais-Réunionnais assigne l'historien en justice en invoquant la loi Taubira, puis retire sa plainte début 2006. La plainte portait sur son refus du mot « génocide », pas sur ses chiffres comparatifs. Françoise Vergès, alors au Comité pour la mémoire de l'esclavage, jugeait la plainte « inacceptable ». L'appel « Liberté pour l'histoire », signé par près de 600 enseignants et chercheurs, demande alors que le législateur cesse de qualifier l'histoire."]),
sec("Le terrain commun",["Orlando Patterson (<em>Slavery and Social Death</em>, 1982) compare 66 sociétés et définit l'esclavage sans faire de la race un critère. Il sert aux deux camps : l'institution est universelle, mais la racialisation s'ajoute dans l'Atlantique. Les spécialistes de la Corée, du Siam ou de Sparte rappellent par ailleurs que beaucoup de systèmes ne répondent pas à la définition de l'esclave-chose, ce qui relativise les comparaisons purement chiffrées.",
"Le sociologue Jean-Michel Chaumont, auteur de <em>La Concurrence des victimes</em> (1997), met en garde contre la course à l'unicité entre mémoires."]),
callout("La ligne éditoriale de ce site","Pas de verdict sur la traite « pire » que les autres. Chaque système est décrit critère par critère, avec ses chiffres signés, ses débats et ses acteurs de tous côtés : marchands européens, arabes et africains, États tatars et ottomans, mais aussi révoltes, débats internes et abolitionnismes.",True),
sources([a("https://fr.wikipedia.org/wiki/Loi_tendant_%C3%A0_la_reconnaissance_de_la_traite_et_de_l%27esclavage_en_tant_que_crime_contre_l%27humanit%C3%A9","Wikipédia, loi Taubira")+" (texte à vérifier sur Légifrance)",a("https://www.herodote.net/L_histoire_de_l_esclavage_sans_prejuges-article-291.php","Entretien de Pétré-Grenouilleau au JDD (2005), reproduit par Herodote.net")+" (site de vulgarisation engagé)",a("https://www.timeshighereducation.com/node/92737","Times Higher Education, sur l'affaire"),a("https://www.college-de-france.fr/fr/agenda/conferencier-invite/la-concurrence-des-victimes-25-ans-plus-tard/extension-du-domaine-de-la-lutte","Jean-Michel Chaumont, Collège de France, 2022"),a("https://scholar.harvard.edu/sites/scholar.harvard.edu/files/vbrown/files/brown-socialdeath.pdf","Vincent Brown, « Social Death and Political Life », AHR, 2009")])],back=False))

P.append(page("aujourdhui","Esclavage moderne · 2021","L'esclavage aujourd'hui",
"Interdit partout, l'esclavage n'a pas disparu. Selon l'Organisation internationale du travail, 50 millions de personnes vivaient en situation d'« esclavage moderne » en 2021.",
[f'<div class="figures"><div class="fig"><span class="n">50 M</span><span class="l">Personnes en esclavage moderne</span><span class="s">Un jour donné de 2021, soit 10 M de plus qu\'en 2016.</span></div><div class="fig"><span class="n">28 M</span><span class="l">Travail forcé</span><span class="s">86 % dans le secteur privé, 14 % imposé par des États.</span></div><div class="fig"><span class="n">22 M</span><span class="l">Mariages forcés</span><span class="s">65 % en Asie-Pacifique.</span></div><div class="fig"><span class="n">3,3 M</span><span class="l">Enfants en travail forcé</span><span class="s">Les migrants sont plus de trois fois plus exposés.</span></div></div>',
sec("Où ?",["Le Global Slavery Index 2023 place en tête, pour la part de la population concernée, la Corée du Nord, l'Érythrée et la Mauritanie. Les États arabes ont le taux de mariage forcé le plus élevé. Les pays du G20 importent chaque année environ 468 milliards de dollars de biens à risque de travail forcé, dont 170 milliards pour les États-Unis."]),
callout("Pourquoi ce chiffre ne se compare pas aux traites","Les 50 millions sont un effectif mesuré un jour donné. Les 12,5 millions de l'Atlantique ou les 8 à 17 millions des traites orientales sont des totaux cumulés sur trois à douze siècles. Écrire qu'il y a « quatre fois plus d'esclaves aujourd'hui que pendant toute la traite atlantique » est donc faux. De plus, l'« esclavage moderne » inclut le mariage forcé et des situations sans propriété juridique, alors que l'esclavage historique était le plus souvent un statut légal, transmissible et vendable."),
sources([a("https://www.ilo.org/resource/news/50-million-people-worldwide-modern-slavery-0","OIT, communiqué de septembre 2022"),a("https://alliance87.org/sites/default/files/2023-06/Global%20Estimates%20of%20Modern%20Slavery%20Forced%20Labour%20and%20Forced%20Marriage.pdf","OIT, Walk Free et OIM, Global Estimates of Modern Slavery, 2022"),a("https://cdn.walkfree.org/content/uploads/2023/05/24144628/GSI-2023-Executive-Summary.pdf","Walk Free, Global Slavery Index 2023")])],back=False))

open('/home/claude/site/gen/pages.html','w').write(''.join(P))
print(len(P))
