const arbres = [
    {
      nom: "Abelia",
      description: "L'Abelia est un arbuste à fleurs, apprécié pour sa floraison généreuse et sa longue période de floraison, de l'été jusqu'à l'automne.",
      climat: "Elle préfère un climat tempéré à chaud et s'épanouit dans des endroits ensoleillés ou partiellement ombragés.",
      bienfaits: "L'Abelia est souvent utilisé en haie ou en massif décoratif. Ses fleurs attirent de nombreux pollinisateurs.",
      image: "https://andre-briant.fr/media/abelia_grandiflora_15__071615800_0857_10012015.jpg" // Remplacez par l'URL de l'image
    },
    {
      nom: "Abricotier",
      description: "L'Abricotier est un arbre fruitier qui produit des abricots sucrés et juteux, très prisés en été.",
      climat: "Il prospère dans un climat méditerranéen, avec des hivers froids et des étés chauds et secs.",
      bienfaits: "Outre ses délicieux fruits, l'Abricotier est un bel arbre ornemental au printemps avec ses fleurs roses.",
      image: "https://unarbrepourmonquartier.org/wp-content/uploads/2021/08/Prunus_armeniaca_Puget_Gold_entiers_cr_fast_growing_trees.jpg"
    },
    {
      nom: "Chêne",
      description: "Le Chêne est un arbre majestueux, connu pour sa longévité et son bois durable, souvent utilisé en menuiserie.",
      climat: "Il préfère un climat tempéré, avec des sols riches et bien drainés.",
      bienfaits: "Le Chêne fournit un habitat pour de nombreuses espèces d'oiseaux et d'insectes. Son bois est également très prisé.",
      image: "https://www.leparisien.fr/resizer/tFdG74hmm1RDSkEQmt1dhYWFX5k=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/NQMJEPZYDRCCNNCKKCTPPNLWLU.jpg" // Remplacez par l'URL de l'image
    },
    {
      nom: "Cerisier",
      description: "Le Cerisier est célèbre pour ses belles fleurs au printemps et ses fruits savoureux, utilisés en pâtisserie.",
      climat: "Il aime les climats tempérés avec des hivers froids et des étés modérément chauds.",
      bienfaits: "En plus de produire des cerises délicieuses, il est un symbole de beauté et de renouveau au printemps.",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Frühling_blühender_Kirschenbaum.jpg" // Remplacez par l'URL de l'image
    },
    {
      nom: "Châtaignier",
      description: "Le Châtaignier est un arbre emblématique des forêts, connu pour ses marrons comestibles.",
      climat: "Il préfère un climat tempéré avec des sols bien drainés et riches en humus.",
      bienfaits: "Les châtaignes sont comestibles et sont également utilisées en cuisine. L'arbre fournit un habitat pour la faune.",
      image: "https://cdn.shopify.com/s/files/1/0510/1309/1516/files/chataigner_1.png?v=1709736826" // Remplacez par l'URL de l'image
    },
    {
      nom: "Eucalyptus",
      description: "L'Eucalyptus est un arbre à croissance rapide, connu pour ses feuilles aromatiques et son écorce distinctive.",
      climat: "Il prospère dans des climats chauds et ensoleillés, tolérant la sécheresse.",
      bienfaits: "L'Eucalyptus est utilisé pour ses huiles essentielles, bénéfiques pour la santé respiratoire et comme antiseptique.",
      image: "https://www.cdiscount.com/pdt2/2/3/6/4/700x700/auc2009372077236/rw/eucalyptus-gunnii-arbre-croissance-tres-rapide-15m.jpg" // Remplacez par l'URL de l'image
    },
    {
      nom: "Frêne",
      description: "Le Frêne est un arbre robuste souvent utilisé pour son bois dur et résistant, idéal pour la fabrication d'outils.",
      climat: "Il préfère un climat tempéré et peut s'adapter à divers types de sol.",
      bienfaits: "Son bois est très recherché pour la construction et la fabrication de meubles. Il est aussi un bon fournisseur d'ombre.",
      image: "https://media.gerbeaud.net/2014/06/640/fraxinus-excelsior.jpg" // Remplacez par l'URL de l'image
    },
    {
      nom: "Amandier",
      description: "L'Amandier est un arbre fruitier qui produit des amandes délicieuses et nutritives.",
      climat: "Il préfère un climat méditerranéen avec des hivers frais et des étés chauds.",
      bienfaits: "Les amandes sont riches en nutriments et bénéfiques pour la santé. L'arbre est aussi très ornemental avec ses fleurs roses.",
      image: "https://cdn1.pepinieres-naudet.com/boutique/4196-thickbox_default/amandier-prunus-amygdalus-.jpg" // Remplacez par l'URL de l'image
    },
    {
      nom: "Aubépine",
      description: "L'Aubépine est un petit arbre épineux, souvent utilisé comme haie vive, apprécié pour ses fleurs blanches et ses fruits rouges.",
      climat: "Il s'épanouit dans des climats tempérés et préfère les sols bien drainés.",
      bienfaits: "Les fleurs d'aubépine sont utilisées en phytothérapie pour leurs propriétés calmantes et cardiaques.",
      image: "https://i-dj.unimedias.fr/2023/09/12/dj94-p64aubepines-arbrec-delvoux-650026f489785.jpg?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=max&w=1050" // Remplacez par l'URL de l'image
    },
    {
      nom: "Alangium",
      description: "L'Alangium est un arbre à fleurs tropicales, connu pour sa beauté et sa capacité à attirer les pollinisateurs.",
      climat: "Il préfère un climat tropical à subtropical, avec une humidité élevée.",
      bienfaits: "Ses fleurs sont souvent utilisées en médecine traditionnelle et son feuillage apporte de l'ombre.",
      image: "https://www.jardindupicvert.com/media/catalog/product/cache/9b8db22e5cb5a580d94445e657d02e33/a/l/alangium-de-chine27100.jpg" // Remplacez par l'URL de l'image
    },
    {
      nom: "Corylus avellana (Noisetier)",
      description: "Le Noisetier est un arbre qui produit des noisettes comestibles, très prisées en pâtisserie.",
      climat: "Il aime les climats tempérés et humides, avec un sol bien drainé.",
      bienfaits: "Les noisettes sont nutritives et riches en graisses saines. L'arbre offre également un habitat pour la faune.",
      image: "https://moncoachjardin.com/wp-content/uploads/2021/09/redimAdobeStock_291338041.jpg" // Remplacez par l'URL de l'image
    },
    {
      nom: "Ailante",
      description: "L'Ailante est un arbre à croissance rapide, souvent utilisé comme arbre d'ornement dans les parcs.",
      climat: "Il prospère dans des climats tempérés à chauds, et peut tolérer une variété de sols.",
      bienfaits: "Il est utilisé en phytothérapie pour ses propriétés médicinales, bien qu'il puisse être envahissant.",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/9d/20140723Bahnhof_Waghaeusel2.jpg" // Remplacez par l'URL de l'image
    },
    {
      nom: "Bouleau",
      description: "Le Bouleau est un arbre à écorce blanche distinctive, souvent planté pour son aspect ornemental.",
      climat: "Il préfère un climat tempéré, avec un sol bien drainé.",
      bienfaits: "Son écorce est utilisée en médecine traditionnelle et son bois est prisé pour la fabrication.",
      image: "https://lh4.googleusercontent.com/proxy/l6jPlx9bRI7DwwHdZFeJFZGk-HqJPu50ZrjAaDTEDiP6VFbaJOX3PkTm3UUqM584VpmYu8VMTrEkE2ZNxJ44qv8dvsJf0BrszBcILkFLGSAOA_A2twtlit2nycs17JQ0rQ" // Remplacez par l'URL de l'image
    },
    {
      nom: "Cèdre",
      description: "Le Cèdre est un arbre majestueux, connu pour son bois parfumé et résistant à la décomposition.",
      climat: "Il préfère un climat tempéré à méditerranéen avec des sols bien drainés.",
      bienfaits: "Son bois est utilisé pour la construction et la fabrication de meubles, et il a également des propriétés médicinales.",
      image: "https://www.francebleu.fr/s3/cruiser-production/2022/07/8c651c95-a355-4794-91aa-09b22c00ea91/1200x680_le_cedre.jpg" // Remplacez par l'URL de l'image
    },
    {
      nom: "Cyprès",
      description: "Le Cyprès est un arbre conifère, souvent utilisé dans les jardins pour son aspect décoratif.",
      climat: "Il préfère un climat méditerranéen, avec des sols bien drainés.",
      bienfaits: "Il est utilisé pour la création d'écrans de protection et pour son bois, durable et résistant.",
      image: "https://www.francebleu.fr/s3/cruiser-production/2022/08/9f683d01-efcb-4d04-9e7c-d0fdebdc7eaf/1200x680_le_cypres.jpg" // Remplacez par l'URL de l'image
    },
    {
      nom: "Hêtre",
      description: "Le Hêtre est un arbre à feuilles caduques, connu pour son feuillage dense et son bois dur.",
      climat: "Il préfère les climats tempérés, avec des sols riches et humides.",
      bienfaits: "Le bois de hêtre est très utilisé en menuiserie, et l'arbre offre un excellent habitat pour la faune.",
      image: "https://media.ooreka.fr/public/image/plant/753/mainImage-source-12157901.jpg" // Remplacez par l'URL de l'image
    },
    {
      nom: "Orme",
      description: "L'Orme est un arbre imposant, souvent planté dans les parcs et le long des avenues.",
      climat: "Il prospère dans des climats tempérés et préfère un sol bien drainé.",
      bienfaits: "Son bois est utilisé pour la fabrication de meubles, et il fournit de l'ombre.",
      image: "https://www.couleursbois.com/media/k2/items/cache/8d49e1f42a25f39552b52fa6de90477e_XL.jpg" // Remplacez par l'URL de l'image
    },
    {
      nom: "Sapin",
      description: "Le Sapin est un arbre conifère, souvent utilisé comme arbre de Noël en raison de son feuillage dense.",
      climat: "Il préfère les climats frais et humides, et se trouve souvent en montagne.",
      bienfaits: "Son bois est utilisé pour la construction et ses aiguilles ont des propriétés aromatiques.",
      image: "https://www.plantezcheznous.com/wp-content/uploads/2022/11/EpiceaCommun.jpg" // Remplacez par l'URL de l'image
    },
    {
      nom: "Tilleul",
      description: "Le Tilleul est un arbre à fleurs, apprécié pour son odeur douce et son ombre dense.",
      climat: "Il préfère les climats tempérés, avec des sols bien drainés.",
      bienfaits: "Les fleurs de tilleul sont souvent utilisées pour faire des infusions apaisantes.",
      image: "https://as1.ftcdn.net/v2/jpg/01/88/72/30/1000_F_188723072_cNSK1StbBMS1lpPXVIPoYmlDgxCNasu2.jpg" // Remplacez par l'URL de l'image
    },
  ];
  
  export default arbres;
  