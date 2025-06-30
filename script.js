const model = {
    wordList: [],
    
    init() {
        this.wordList = [
            "abaco", "abade", "abafa", "abafo", "abala", "abalo", "abana", "abate", "abati", "abato", "abeto", "abriu", "abusa", "abuso", "acaba", "acabo",
            "acaso", "acato", "acena", "aceno", "acesa", "aceso", "aceto", "achai", "acham", "achar", "achas", "achei", "achem", "aches", "achou", "acida",
            "acido", "acima", "acola", "acoou", "acuai", "acuam", "acuar", "acuas", "acude", "acudi", "acudo", "acuei", "acuem", "acues", "acuou", "acusa",
            "acuso", "adaga", "adega", "adere", "aderi", "adeus", "adiai", "adiam", "adiar", "adias", "adida", "adido", "adiei", "adiem", "adies", "adieu",
            "adimo", "adiou", "adira", "adita", "adito", "adoce", "adora", "adoro", "adota", "adoto", "aduba", "adubo", "adula", "adulo", "advir", "aerea", 
            "aereo", "afaga", "afago", "afana", "afeto", "afiai", "afiam", "afiar", "afias", "afiei", "afiem", "afies", "afina", "afino", "afins",
            "afiou", "afixa", "afixo", "aflui", "afoba", "afobo", "afofa", "afofo", "afoga", "afogo", "afora", "afras", "afris", "afros", "agiam", "agias",
            "agido", "agil", "agimos", "agira", "agita", "agito", "agora", "aguai", "aguam", "aguar", "aguas", "aguca", "agudo", "aguei", "aguem", "agues",
            "aguia", "aguou", "ainda", "aipim", "aires", "ajais", "ajuda", "ajudo", "alaga", "alcei", "alcem", "alces", "alcou", "aldea", "alega", "alego",
            "alema", "algas", "algoz", "algum", "alhea", "alheo", "alhos", "aliai", "aliam", "aliar", "alias", "aliei", "aliem", "alies", "alija", "alijo",
            "aliou", "alisa", "aliso", "almas", "aloca", "aloco", "aloja", "alojo", "aloou", "alpes", "altar", "altas", "alter", "altos", "aluda", "alude",
            "aludi", "aludo", "aluga", "alugo", "aluia", "aluir", "aluis", "aluiu", "aluna", "aluno", "alvas", "alvor", "alvos", "amada", "amado", "amais",
            "amara", "amaro", "amava", "ambas", "ambos", "ameba", "ameca", "ameia", "amena", "ameno", "amido", "amiga", "amigo", "amima", "amimo", "amola",
            "amolo", "amora", "ampla", "amplo", "amuou", "anais", "ancas", "ancia", "andai", "andam", "andar", "andas", "andei", "andem", "andes", "andor",
            "andou", "anela", "anelo", "anexa", "anexo", "anglo", "angra", "anima", "animo", "anjos", "anota", "anoto", "ansia", "antas", "antes", "antro",
            "anual", "anuia", "anuir", "anuis", "anuiu", "anula", "anulo", "anzol", "aonde", "aorta", "apaga", "apago", "apara", "aparo", "apeai", "apear",
            "apeei", "apega", "apego", "apeia", "apeie", "apeio", "apeis", "apela", "apelo", "apena", "apeno", "apeou", "apice", "apita", "apito", "apoia",
            "apoio", "apolo", "aptas", "aptos", "apura", "apuro", "aquem", "arabe", "arada", "arado", "arais", "arame", "arara", "arava", "arcas", "arcos",
            "ardam", "ardas", "ardei", "ardem", "arder", "ardes", "ardeu", "ardia", "ardil", "ardis", "ardor", "ardua", "arduo", "areal", "areas", "areia",
            "arena", "arfai", "arfam", "arfar", "arfas", "arfei", "arfem", "arfes", "arfou", "argua", "argui", "armai", "armam", "armar", "armas", "armei",
            "armem", "armes", "armou", "aroma", "arpoa", "arroz", "artes", "asila", "asilo", "asnos", "aspas", "assai", "assam", "assar", "assas", "assei",
            "assem", "asses", "assim", "assoa", "assou", "astro", "ataca", "ataco", "atada", "atado", "atais", "atara", "atava", "ateai", "atear", "ateei",
            "ateia", "ateie", "ateio", "ateis", "atemo", "atens", "ateou", "atera", "ateus", "ateve", "atica", "atice", "atico", "atido", "atina", "atino",
            "atira", "atiro", "ativa", "ativo", "atlas", "atola", "atolo", "atomo", "atona", "atono", "atrai", "atras", "atrio", "atriz", "atuai", "atual",
            "atuam", "atuar", "atuas", "atuei", "atuem", "atues", "atuou", "atura", "aturo", "audaz", "audio", "aulas", "auras", "autor", "autua", "autuo",
            "avais", "avara", "avaro", "aveia", "avela", "aviao", "avida", "avido", "avila", "avisa", "aviso", "aviva", "avivo", "axial", "axila", "azara",
            "azaro", "azeda", "azedo", "azeis", "azias", "azoto", "azuis", "azula", "azulo", "babai", "babam", "babar", "babas", "babei", "babel", "babem",
            "babes", "babou", "bacia", "bacos", "bafos", "bagas", "bagos", "bahia", "baiai", "baiam", "baiar", "baias", "baiei", "baiem", "baies", "baios",
            "baiou", "baira", "baita", "baixa", "baixo", "balam", "balao", "balas", "balca", "balde", "balea", "balem", "bales", "balia", "balir", "balis",
            "baliu", "balsa", "bamba", "bambo", "bambu", "banal", "banca", "banco", "banda", "bando", "banem", "banes", "banga", "banha", "banho", "bania",
            "banir", "banis", "baniu", "banjo", "baque", "barba", "barca", "barco", "bardo", "bares", "baria", "bario", "barra", "barro", "basea", "bases",
            "basta", "basto", "batam", "batas", "batei", "batel", "batem", "bater", "bates", "bateu", "batia", "batom", "bauru", "bazar", "beata", "beato",
            "bebam", "bebas", "bebei", "bebem", "beber", "bebes", "bebeu", "bebia", "becas", "becos", "beico", "beija", "beijo", "beira", "beiro", "belas",
            "belga", "belos", "bemol", "benta", "bento", "benza", "benze", "benzi", "benzo", "beque", "berco", "berna", "berne", "berro", "besta", "bicai",
            "bicam", "bicar", "bicas", "bicha", "bicho", "bicos", "bicou", "biela", "bigas", "bingo", "bique", "birra", "bisao", "bispo", "blefa", "blefo",
            "bloco", "blusa", "boas", "boate", "boato", "bobas", "bobea", "bobos", "bocal", "bocas", "bocha", "bodas", "bodes", "boers", "bofes", "boiai",
            "boiam", "boiar", "boias", "boiei", "boiem", "boies", "boina", "boiou", "bolai", "bolam", "bolar", "bolas", "boldo", "bolei", "bolem", "boles",
            "bolha", "bolos", "bolou", "bolsa", "bolso", "bomba", "bombo", "bonde", "bones", "bonus", "borca", "borda", "bordo", "borra", "borro", "bossa",
            "bosta", "botai", "botam", "botar", "botas", "botei", "botem", "botes", "botou", "boxea", "braca", "braco", "brada", "brado", "braga", "brama",
            "bramo", "brasa", "brava", "bravo", "breca", "breco", "brejo", "breta", "breve", "brida", "briga", "brigo", "brins", "brios", "brisa", "brita",
            "brito", "broas", "broca", "broco", "bromo", "brota", "brote", "broto", "bruma", "bruta", "bruto", "bruxa", "bruxo", "bucal", "bucha", "bucho",
            "bueno", "bufai", "bufam", "bufar", "bufas", "bufei", "bufem", "bufes", "bufou", "bugre", "bulam", "bulas", "bulbo", "bules", "bulha", "bulia",
            "bulir", "bulis", "buliu", "bumbo", "bunda", "bunde", "bundo", "burgo", "burla", "burlo", "burra", "burro", "busca", "busco", "busto", "buxos",
            "buzio", "cabal", "cabem", "caber", "cabes", "cabia", "cabos", "cabra", "cacho", "cacos", "cacto", "cafes", "caiam", "caias", "caiba", "caido",
            "caimo", "cairo", "caixa", "cajus", "calai", "calam", "calar", "calas", "calca", "calco", "calda", "caldo", "calei", "calem", "cales", "calha",
            "calma", "calmo", "calor", "calos", "calou", "calva", "calvo", "camas", "campa", "campo", "canaa", "canal", "canas", "canga", "canja", "canoa",
            "canos", "cansa", "canso", "canta", "canto", "capai", "capam", "capar", "capas", "capaz", "capei", "capem", "capes", "capim", "capou", "capta",
            "capto", "capuz", "caras", "cardo", "carga", "cargo", "carmo", "carne", "caros", "carpa", "carro", "carta", "casai", "casal", "casam", "casar",
            "casas", "casca", "casco", "casei", "casem", "cases", "casos", "casou", "caspa", "casta", "casto", "catai", "catam", "catar", "catas", "catei",
            "catem", "cates", "catou", "cauda", "caule", "causa", "causo", "cauta", "cauto", "cavai", "cavam", "cavar", "cavas", "cavei", "cavem", "caves",
            "cavou", "ceado", "ceais", "ceara", "ceava", "cedam", "cedas", "cedei", "cedem", "ceder", "cedes", "cedeu", "cedia", "cedro", "cegai", "cegam",
            "cegar", "cegas", "cegos", "cegou", "cegue", "ceiam", "ceias", "ceiem", "ceies", "ceifa", "ceifo", "celas", "celia", "celos", "celta", "cenas",
            "censo", "cento", "ceras", "cerca", "cerco", "cerda", "cerne", "cerni", "cerol", "cerra", "cerro", "certa", "certo", "cervo", "cessa", "cesso",
            "cesta", "cesto", "cetim", "cetro", "chaga", "chago", "chale", "chama", "chamo", "chapa", "chata", "chato", "chave", "checa", "checo", "chefa",
            "chefe", "chega", "chego", "cheia", "cheio", "chiai", "chiam", "chiar", "chias", "chica", "chico", "chiei", "chiem", "chies", "china", "chiou",
            "choca", "choco", "chora", "choro", "chova", "chove", "chovi", "chovo", "chupa", "chupo", "chuta", "chute", "chuto", "chuva", "ciclo", "cidra",
            "cifra", "cifro", "cilio", "cinco", "cinda", "cindi", "cindo", "cinge", "cingi", "cinja", "cinjo", "cinta", "cinto", "cinza", "ciosa", "cioso",
            "cipos", "circo", "cirio", "cisao", "cisca", "cisco", "cisma", "cismo", "cisne", "citai", "citam", "citar", "citas", "citei", "citem", "cites",
            "citou", "civil", "civis", "clama", "clamo", "clara", "claro", "clava", "clero", "clica", "clico", "clima", "clips", "clone", "cloro", "clube",
            "coada", "coado", "coagi", "coais", "coaja", "coajo", "coara", "coava", "coaxa", "coaxo", "cobra", "cobre", "cobri", "cobro", "cocai", "cocam",
            "cocar", "cocas", "cocei", "cocem", "coces", "cocha", "cocho", "cocos", "cocou", "codea", "codex", "coege", "coeis", "coesa", "coeso", "coeva",
            "coevo", "cofre", "coiba", "coibe", "coibi", "coibo", "coice", "coifa", "coisa", "coito", "colai", "colam", "colar", "colas", "colei", "colem",
            "coles", "colha", "colhe", "colhi", "colho", "colou", "comam", "comas", "combo", "comei", "comem", "comer", "comes", "comeu", "comia", "compo",
            "comum", "conde", "cones", "conga", "conta", "conto", "copas", "copia", "copio", "copos", "corai", "coral", "coram", "corar", "coras", "corca",
            "corei", "corem", "cores", "corja", "corno", "coroa", "coroe", "coroo", "coros", "corpo", "corra", "corre", "corri", "corro", "corta", "corte",
            "corto", "corva", "corvo", "cosam", "cosas", "cosei", "cosem", "coser", "coses", "coseu", "cosia", "cosmo", "costa", "cotai", "cotam", "cotar",
            "cotas", "cotei", "cotem", "cotes", "cotou", "coube", "couce", "coura", "couro", "couto", "couve", "covas", "coxas", "coxim", "coxos", "cozam",
            "cozas", "cozei", "cozem", "cozer", "cozes", "cozeu", "cozia", "crava", "cravo", "crede", "credo", "creem", "creia", "creio", "crema", "cremo",
            "crera", "cres", "criai", "criam", "criar", "crias", "crido", "criei", "criem", "cries", "crina", "criou", "crise", "criva", "crivo", "croma",
            "cromo", "cruas", "cruel", "cruza", "cruzo", "cubas", "cubos", "cubra", "cubro", "cucas", "cucos", "cuias", "cuica", "cujos", "cujus", "culpa",
            "culpo", "culta", "culto", "cumes", "cunha", "cunho", "cupim", "cupom", "curai", "curam", "curar", "curas", "curei", "curem", "cures", "curia",
            "curou", "cursa", "curso", "curta", "curto", "curva", "curvo", "cuspa", "cuspe", "cuspi", "cuspo", "custa", "custe", "custo", "cutis", "dadas",
            "dador", "dados", "damas", "damos", "danai", "danam", "danar", "danas", "danca", "dance", "danco", "dando", "danei", "danem", "danes", "danos",
            "danou", "dante", "daqui", "darao", "daras", "darci", "dardo", "darei", "darem", "dares", "daria", "dario", "datai", "datam", "datar", "datas",
            "datei", "datem", "dates", "datou", "davam", "davas", "debil", "decai", "dedal", "dedao", "dedos", "deduz", "deita", "deito", "deixa", "deixo",
            "delas", "deles", "delta", "demao", "demos", "densa", "denso", "dente", "depor", "depos", "depus", "deque", "deram", "deras", "derby", "derem",
            "deres", "dermo", "desca", "desce", "desci", "desco", "desde", "despe", "despi", "desse", "desta", "deste", "desva", "deter", "detes", "detem",
            "deusa", "devam", "devas", "devei", "devem", "dever", "deves", "deveu", "devia", "diabo", "dicas", "dieta", "digam", "digas", "digna", "digno",
            "dilua", "dilui", "diluo", "diodo", "dique", "dirao", "diras", "direi", "diria", "disca", "disco", "dispo", "disse", "disso", "dista", "disto",
            "ditai", "ditam", "ditar", "ditas", "ditei", "ditem", "dites", "ditos", "ditou", "divas", "dizei", "dizem", "dizer", "dizes", "dizia", "doada",
            "doado", "doais", "doara", "doava", "dobra", "dobro", "docas", "docil", "docura", "doida", "doido", "dolar", "domai", "domam", "domar", "domas",
            "domei", "domem", "domes", "domou", "donas", "donde", "donos", "dopai", "dopam", "dopar", "dopas", "dopei", "dopem", "dopes", "dopou", "dores",
            "dorme", "dormi", "dorso", "dosai", "dosam", "dosar", "dosas", "dosei", "dosem", "doses", "dosou", "dotai", "dotam", "dotar", "dotas", "dotei",
            "dotem", "dotes", "dotou", "doura", "douro", "douta", "douto", "draga", "drago", "drama", "drena", "dreno", "droga", "drogo", "duais", "dubia",
            "dubio", "dubla", "dublo", "ducha", "duela", "duelo", "dueto", "dumas", "dunas", "dunga", "dupla", "duplo", "duque", "durai", "duram", "durar",
            "duras", "durei", "durem", "dures", "durma", "durmo", "duros", "durou", "dutos", "duzia", "ebano", "ebola", "ecoai", "ecoam", "ecoar", "ecoas",
            "ecoei", "ecoem", "ecoes", "ecoou", "edema", "edita", "edito", "educa", "educo", "egito", "eguas", "eiras", "eixos", "ejeta", "ejeto", "elege",
            "elegi", "eleja", "elejo", "eleva", "elevo", "elias", "elide", "elidi", "elisa", "elite", "elixa", "elixo", "elos", "emana", "emano", "emaus",
            "emita", "emite", "emiti", "emito", "empos", "enche", "enchi", "enfia", "enfim", "enjoa", "enjoo", "enoja", "enojo", "entao", "entre",
            "entro", "envia", "envio", "ereta", "ereto", "ergue", "ergui", "erica", "erice", "erico", "erige", "erigi", "erija", "erijo", "ermos", "eroda",
            "erode", "erodi", "erodo", "errai", "erram", "errar", "erras", "errei", "errem", "erres", "erros", "errou", "ervas", "escoa", "escoo", "esima",
            "esimo", "esqui", "essas", "esses", "estai", "estao", "estar", "estas", "este", "estio", "estou", "esvai", "etano", "etapa", "eteno", "etica",
            "etico", "etilo", "etipe", "etnia", "evada", "evade", "evadi", "evado", "evita", "evito", "evoca", "evoco", "exala", "exalo", "exame", "exara",
            "exaro", "exata", "exato", "exiba", "exibe", "exibi", "exibo", "exige", "exigi", "exija", "exijo", "exila", "exilo", "exime", "eximi", "exito",
            "exodo", "expia", "expio", "expor", "expos", "expus", "extra", "facam", "facas", "faces", "facho", "facil", "fadas", "fados", "faina", "faixa",
            "falai", "falam", "falar", "falas", "falda", "falei", "falem", "fales", "falha", "falho", "falia", "falir", "falis", "faliu", "falou", "falsa",
            "falso", "falta", "falto", "famas", "farda", "fardo", "faria", "farol", "faros", "farpa", "farra", "farsa", "farta", "farto", "fases", "fatal",
            "fatia", "fatio", "fatos", "fator", "fauna", "fauno", "favas", "favor", "fazei", "fazem", "fazer", "fazes", "fazia", "febre", "fecal", "fecha",
            "fecho", "fedam", "fedas", "fedei", "fedem", "feder", "fedes", "fedeu", "fedia", "fedor", "feias", "feios", "feira", "feita", "feito", "feixe",
            "felix", "feliz", "femea", "femur", "fenda", "fende", "fendi", "fendo", "feras", "ferem", "feres", "feria", "ferir", "feris", "feriu", "feroz",
            "ferra", "ferro", "ferva", "ferve", "fervi", "fervo", "festa", "fetal", "fetos", "feudo", "fezes", "fiado", "fiais", "fiara", "fiava", "fibra",
            "ficai", "ficam", "ficar", "ficas", "ficha", "fiche", "ficho", "ficou", "figas", "figos", "filai", "filam", "filar", "filas", "filei", "filem",
            "files", "filha", "filho", "filia", "filio", "filma", "filmo", "filou", "final", "finas", "finca", "finco", "finda", "findo", "finge", "fingi",
            "finja", "finjo", "finos", "finta", "finto", "fique", "firam", "firas", "firma", "firmo", "fisca", "fisco", "fisga", "fisgo", "fitai",
            "fitam", "fitar", "fitas", "fitei", "fitem", "fites", "fitou", "fixai", "fixam", "fixar", "fixas", "fixei", "fixem", "fixes", "fixos", "fixou",
            "flavo", "floco", "flora", "flori", "fluam", "fluas", "fluem", "fluir", "fluis", "fluiu", "fluxo", "fobia", "focai", "focam", "focar", "focas",
            "focos", "focou", "fofas", "fofos", "fofou", "fogao", "fogem", "foges", "fogos", "foice", "foles", "folga", "folgo", "folha", "folia", "foras",
            "forca", "force", "forco", "forem", "fores", "forja", "forjo", "forma", "formo", "forno", "foros", "forra", "forro", "forte", "forum", "fosca",
            "fosco", "fossa", "fosse", "fosso", "foste", "fotos", "fraca", "fraco", "frade", "fraga", "frase", "freai", "frear", "freei", "freia", "freie",
            "freio", "freis", "freme", "fremi", "fresa", "freta", "frete", "freto", "frevo", "frias", "frige", "frigi", "frija", "frijo", "frios", "frisa",
            "friso", "frita", "frito", "frota", "fruam", "fruas", "fruem", "fruir", "fruis", "fruiu", "fruta", "fruto", "fucai", "fucam", "fucar", "fucas",
            "fucou", "fugas", "fugaz", "fugia", "fugir", "fugis", "fugiu", "fujao", "fujam", "fujas", "fujem", "fujes", "fujao", "fujir", "fujis", "fujiu",
            "fulge", "fulgi", "fumar", "fumou", "funda", "fundo", "funil", "funis", "furai", "furam", "furar", "furas", "furei", "furem", "fures", "furia",
            "furna", "furor", "furou", "furta", "furto", "fusao", "fusco", "fusos", "futil", "futon", "futre", "futum", "fuzil", "fuzis", "gabar", "gabou",
            "gados", "gagas", "gagos", "gaita", "gajas", "gajos", "galas", "gales", "galga", "galgo", "galho", "galia", "galos", "gamao", "gamba", "gamos",
            "ganem", "ganes", "ganga", "ganha", "ganhe", "ganho", "gania", "ganir", "ganis", "ganiu", "ganso", "garbo", "garca", "garfa", "garfo", "garis",
            "garoa", "garoe", "garoo", "garra", "gases", "gasta", "gasto", "gatas", "gatos", "gavea", "gazua", "geada", "geado", "geais", "geara", "geava",
            "geiam", "geias", "geiem", "geies", "gelai", "gelam", "gelar", "gelas", "gelei", "gelem", "geles", "gelos", "gelou", "gemam", "gemas", "gemea",
            "gemei", "gemem", "gemer", "gemes", "gemeu", "gemia", "genio", "genro", "gente", "gerai", "geral", "geram", "gerar", "geras", "gerei", "gerem",
            "geres", "geria", "gerir", "geris", "geriu", "germe", "gerou", "gesso", "gesta", "gesto", "gibao", "ginga", "gingo", "ginja", "giram", "giras",
            "girei", "girem", "gires", "giria", "girio", "giros", "girou", "gleba", "globo", "glosa", "gloso", "glote", "gnomo", "godos", "goela", "goias",
            "golas", "golea", "goles", "golfo", "golpe", "gomas", "gomes", "gomos", "gongo", "gonzo", "gorai", "goram", "gorar", "goras", "gorda", "gordo",
            "gorei", "gorem", "gores", "gorou", "gorro", "gosta", "gosto", "gotas", "gozai", "gozam", "gozar", "gozas", "gozei", "gozem", "gozes", "gozos",
            "gozou", "graca", "grade", "grafa", "grafo", "grama", "grana", "grata", "grato", "graus", "grava", "gravo", "graxa", "graxo", "grega", "grego",
            "greve", "grifa", "grifo", "grila", "grilo", "gripe", "grita", "grito", "gruda", "grudo", "grumo", "grupo", "gueto", "guiai", "guiam", "guiar",
            "guias", "guiei", "guiem", "guies", "guiou", "guisa", "guizo", "gumes", "guria", "guris", "gurus", "habil", "hajam", "hajas", "halos", "haras",
            "harpa", "haste", "haure", "hauri", "havei", "haver", "havia", "heras", "heroi", "hiato", "hiena", "hifen", "hilar", "himen", "hinos", "hindu",
            "hipos", "hobby", "homem", "honra", "honro", "horas", "horda", "horta", "horto", "hotel", "houve", "hulha", "humor", "humus", "hunos", "hurra",
            "iamos", "iates", "ibero", "iceis", "icemo", "icou", "icone", "idade", "ideal", "ideia", "ideio", "idolo", "idosa", "idoso", "ienes", "igapo",
            "ignea", "igneo", "igual", "ilesa", "ileso", "ilhai", "ilham", "ilhar", "ilhas", "ilhei", "ilhem", "ilhes", "ilhou", "iluda", "ilude", "iludi",
            "iludo", "imita", "imito", "imola", "imolo", "impar", "impia", "impio", "impor", "impos", "impus", "imune", "inala", "inalo", "inata", "inato",
            "incas", "incha", "incho", "incoa", "incoo", "indas", "indez", "india", "indio", "induz", "infla", "inflo", "infra", "iniba", "inibe", "inibi",
            "inibo", "inova", "inovo", "insta", "insto", "inter", "intua", "intui", "intuo", "inves", "iodos", "ioga", "ionia", "ionio", "ions", "irada",
            "irado", "irdes", "ireis", "irene", "iriar", "iriam", "irias", "irmas", "irmao", "irmos", "iscas", "isola", "isolo", "istmo", "italo", "itens",
            "itrio", "jacas", "janta", "janto", "japao", "jarda", "jarra", "jarro", "jatos", "jaula", "jazam", "jazas", "jazei", "jazem", "jazer", "jazes",
            "jazeu", "jazia", "jegue", "jeito", "jejum", "jeova", "jesus", "jinga", "jipes", "jogai", "jogam", "jogar", "jogas", "jogos", "jogou", "jogue",
            "joias", "jorge", "jorra", "jorro", "jovem", "jubas", "judas", "judeu", "judia", "judio", "juiza", "juizo", "julga", "julgo", "julho", "junco",
            "junho", "junta", "junto", "jurai", "juram", "jurar", "juras", "jurei", "jurem", "jures", "juros", "jurou", "justa", "justo", "labia", "labio",
            "labor", "lacai", "lacam", "lacar", "lacas", "lacei", "lacem", "laces", "lacio", "lacou", "lacra", "lacre", "lacro", "lados", "ladra", "ladro",
            "lagar", "lages", "lagoa", "lagos", "laica", "laico", "laivo", "lajes", "lamas", "lamba", "lambe", "lambi", "lambo", "lance", "lanco", "lapis",
            "lapso", "lares", "larga", "largo", "larva", "lasca", "lasco", "laser", "latao", "latas", "latem", "lates", "latex", "latia", "latim", "latir",
            "latis", "latiu", "lauda", "laudo", "laura", "lavai", "lavam", "lavar", "lavas", "lavei", "lavem", "laves", "lavou", "lavra", "lavro", "lazer",
            "leais", "lebre", "ledas", "ledor", "ledos", "legai", "legal", "legam", "legar", "legas", "legou", "legua", "legue", "leiam", "leias", "leiga",
            "leigo", "leite", "leito", "lemas", "lemes", "lemos", "lenco", "lenda", "lendo", "lenga", "lenha", "lenho", "lenta", "lente", "lento", "leoas",
            "leoes", "lepid", "lepra", "leque", "leram", "leras", "lerda", "lerdo", "lerei", "lerem", "leres", "leria", "lesai", "lesam", "lesar", "lesas",
            "lesei", "lesem", "leses", "lesma", "lesou", "lesse", "leste", "letal", "letra", "levai", "levam", "levar", "levas", "levei", "levem", "leves",
            "levou", "lhama", "liame", "libra", "licas", "liceu", "licor", "lidai", "lidam", "lidar", "lidas", "lidei", "lidem", "lider", "lides", "lidos",
            "lidou", "lieis", "ligai", "ligam", "ligar", "ligas", "ligei", "ligem", "liges", "ligou", "ligue", "lilas", "limai", "limam", "limao", "limar",
            "limas", "limbo", "limei", "limem", "limes", "limou", "limpa", "limpo", "lince", "linda", "lindo", "linfa", "linha", "linho", "linos", "lires",
            "lisas", "lisos", "lista", "listo", "litio", "litro", "livra", "livre", "livro", "lixai", "lixam", "lixar", "lixas", "lixei", "lixem", "lixes",
            "lixou", "lobao", "lobas", "lobos", "locai", "local", "locam", "locar", "locas", "locou", "logra", "logro", "loira", "loiro", "lojas", "lombo",
            "lonas", "longa", "longe", "longo", "lopes", "loque", "lorde", "lotai", "lotam", "lotar", "lotas", "lotei", "lotem", "lotes", "lotou", "lotus",
            "louca", "louco", "loura", "louro", "lousa", "louva", "louvo", "lucas", "lucio", "lucra", "lucro", "lugar", "lunar", "lupas", "lusas", "lusos",
            "lutai", "lutam", "lutar", "lutas", "lutei", "lutem", "lutes", "lutou", "luvas", "luxos", "luzam", "luzas", "luzem", "luzes", "luzia", "luzir",
            "luzis", "luziu", "macas", "macio", "macos", "macro", "mafia", "magia", "magma", "magna", "magoa", "magoo", "magos", "magra", "magro", "maias",
            "maior", "major", "malas", "males", "malha", "malho", "malte", "mamae", "mamai", "mamam", "mamao", "mamar", "mamas", "mamei", "mamem", "mames",
            "mamou", "manas", "manca", "manco", "manda", "mando", "manea", "manga", "manha", "mania", "manja", "manjo", "mansa", "manso", "manta", "manto",
            "mapas", "mapea", "marca", "marco", "mares", "maria", "mario", "marra", "marta", "marte", "masca", "masco", "massa", "mata-", "matai", "matam",
            "matar", "matas", "matei", "matem", "mates", "matiz", "matos", "matou", "mauro", "meada", "meado", "mecha", "medem", "medes", "media", "medir",
            "medis", "mediu", "medo", "medra", "medro", "meiao", "meias", "meiga", "meigo", "meios", "meiri", "melai", "melam", "melao", "melar", "melas",
            "melei", "melem", "meles", "melou", "melro", "menea", "menir", "menor", "menos", "menta", "mente", "menti", "menus", "meras", "merce", "merda",
            "meres", "merio", "meros", "mesas", "meses", "mesma", "mesmo", "metal", "metam", "metas", "metei", "metem", "meter", "metes", "meteu", "metia",
            "metro", "mexam", "mexas", "mexei", "mexem", "mexer", "mexes", "mexeu", "mexia", "miado", "miais", "miara", "miava", "micos", "micro", "midia",
            "mijai", "mijam", "mijar", "mijas", "mijei", "mijem", "mijes", "mijou", "milha", "milho", "mimos", "minai", "minam", "minar", "minas", "minei",
            "minem", "mines", "minha", "minis", "minou", "minta", "minto", "miolo", "miope", "mirai", "miram", "mirar", "miras", "mirei", "mirem", "mires",
            "mirou", "mirra", "missa", "mista", "misto", "mitos", "mitra", "miuda", "miudo", "mixos", "mixto", "moais", "moamo", "mocos", "modas", "modem",
            "modos", "moeda", "moeis", "moela", "moera", "mofai", "mofam", "mofar", "mofas", "mofei", "mofem", "mofes", "mofou", "mogem", "moges", "mogno",
            "mogol", "magos", "moiam", "moias", "moida", "moido", "moita", "mola", "molas", "molda", "molde", "moldo", "moles", "molha", "molhe", "molho",
            "momos", "monge", "monja", "monta", "monte", "monto", "morai", "moral", "moram", "morar", "moras", "morda", "morde", "mordi", "mordo", "morei",
            "morem", "mores", "morna", "morno", "morre", "morri", "morro", "morsa", "morse", "morta", "morte", "morto", "mosca", "mosco", "motel", "motor",
            "motos", "moura", "mouro", "movam", "movas", "movei", "movem", "mover", "moves", "moveu", "movia", "movil", "mucos", "mudai", "mudam", "mudar",
            "mudas", "mudei", "mudem", "mudes", "mudez", "mudos", "mudou", "mugem", "muges", "mugia", "mugir", "mugis", "mugiu", "muita", "muito", "mulas",
            "multa", "multo", "mundo", "munem", "munes", "munia", "munir", "munis", "muniu", "murai", "mural", "muram", "murar", "muras", "murei", "murem",
            "mures", "muros", "murou", "murro", "murta", "musas", "musca", "musco", "museu", "musgo", "mutua", "mutuo", "nabla", "nabos", "nacao", "nacos",
            "nadai", "nadam", "nadar", "nadas", "nadei", "nadem", "nades", "nadou", "nafta", "naipe", "nanai", "nanam", "nanar", "nanas", "nanei", "nanem",
            "nanes", "nanou", "narco", "nardo", "nariz", "narra", "narro", "nasal", "nasca", "nasce", "nasci", "nasco", "natal", "natas", "natos", "nauta",
            "naval", "naves", "navio", "negai", "negam", "negao", "negar", "negas", "negou", "negra", "negro", "negue", "nelas", "neles", "nenem", "nenes",
            "nervo", "nesga", "nessa", "nesse", "nesta", "neste", "netas", "netos", "nevai", "nevam", "nevar", "nevas", "nevei", "nevem", "neves", "nevoa",
            "nevou", "nexos", "nicho", "ninai", "ninam", "ninar", "ninas", "ninei", "ninem", "nines", "ninfa", "ninho", "ninou", "niopo", "nipos", "nisso",
            "nisto", "nitro", "nivel", "nobel", "nobre", "nocao", "nodal", "nodoa", "noite", "noiva", "noivo", "nojos", "nomes", "nonas", "nonos", "noras",
            "norma", "norte", "nossa", "nosso", "notai", "notam", "notar", "notas", "notei", "notem", "notes", "notou", "novas", "novos", "nozes", "nucas",
            "nudez", "nulas", "nulos", "numas", "nunca", "nunes", "nutra", "nutre", "nutri", "nutro", "nuvem", "oasis", "obesa", "obeso", "obito", "obolo",
            "obras", "obsta", "obsto", "obtem", "obter", "obteve", "obvia", "obvie", "obvio", "obvim", "obvir", "ocaso", "ocupa", "ocupo", "odeia", "odeie",
            "odeio", "odiai", "odiar", "odiei", "odiou", "oeste", "ogiva", "oitao", "oitis", "oitiva", "olhai", "olham", "olhar", "olhas", "olhei", "olhem",
            "olhes", "olhos", "olhou", "oliva", "ombro", "omega", "omita", "omite", "omiti", "omito", "oncas", "ondas", "onde", "onera", "onero", "onix",
            "ontem", "onus", "onze", "opaca", "opaco", "opala", "opcao", "opera", "opero", "opina", "opino", "opio", "opor", "opta", "opto", "opunha",
            "opuser", "oraca", "orais", "oral", "orava", "orcai", "orcam", "orcar", "orcas", "orcei", "orcem", "orces", "orcou", "ordem", "ordens", "oreis",
            "orfao", "orfas", "orgao", "orgem", "orges", "orgia", "orias", "orion", "orlai", "orlam", "orlar", "orlas", "orlei", "orlem", "orles", "orlou",
            "ornai", "ornam", "ornar", "ornas", "ornei", "ornem", "ornes", "ornou", "ossea", "osseo", "ossos", "ostra", "otica", "otico", "otima", "otimo",
            "oucam", "oucas", "ouco", "ourar", "ouros", "ousai", "ousam", "ousar", "ousas", "ousei", "ousem", "ouses", "ousou", "outra", "outro", "ouvem",
            "ouves", "ouvi", "ouvia", "ouvir", "ouvis", "ouviu", "ovais", "ovino", "ovulo", "oxala", "oxida", "oxido", "pacas", "pacto", "padre", "pagai",
            "pagam", "pagao", "pagar", "pagas", "pagem", "pagos", "pagou", "pague", "paira", "pairo", "paje", "palco", "palha", "palma", "palmo", "pampa",
            "panca", "panda", "pando", "panos", "papai", "papam", "papar", "papas", "papei", "papel", "papem", "papes", "papos", "papou", "parai", "param",
            "parar", "paras", "parca", "parco", "parda", "pardo", "parea", "parei", "parem", "pareo", "pares", "paria", "parir", "paris", "pariu", "parou",
            "parta", "parte", "parti", "parto", "parva", "parvo", "passa", "passe", "passo", "pasta", "pasto", "patas", "patim", "patio", "patos", "patua",
            "paula", "paulo", "pausa", "pauta", "pauto", "pavao", "pavio", "pavor", "pazes", "peao", "pecai", "pecam", "pecar", "pecas", "pecou", "pedal",
            "pedem", "pedes", "pedia", "pedir", "pedis", "pediu", "pedra", "pegai", "pegam", "pegar", "pegas", "pegos", "pegou", "pegue", "peida", "peido",
            "peita", "peito", "peixe", "pelai", "pelam", "pelar", "pelas", "pelei", "pelem", "peles", "pelos", "pelou", "penai", "penal", "penam", "penar",
            "penas", "penca", "penda", "pende", "pendi", "pendo", "penei", "penem", "penes", "penis", "penou", "pensa", "penso", "pente", "penug", "peoes",
            "pepin", "peras", "perca", "perco", "perda", "perde", "perdi", "perna", "peros", "persa", "perto", "perua", "perus", "pesai", "pesam", "pesar",
            "pesas", "pesca", "pesco", "pesei", "pesem", "peses", "pesos", "pesou", "peste", "petiz", "piada", "piado", "piais", "piara", "piaui", "piava",
            "picai", "picam", "picar", "picas", "picha", "piche", "picho", "pico", "picos", "picou", "piedade", "piegas", "pifia", "pifio", "pifai", "pifam",
            "pifar", "pifas", "pifei", "pifem", "pifes", "pifou", "pilao", "pilar",
            "pilas", "pilha", "pilho", "pinca", "pince", "pinco", "pinga", "pingo", "pinha", "pinho", "pinos", "pinta", "pinto", "piora", "pioro", "pipas",
            "pique", "pirao", "pires", "pisai", "pisam", "pisar", "pisas", "pisca", "pisco", "pisei", "pisem", "pises", "pisou", "pista", "pisto", "pitas",
            "piton", "pivos", "pizza", "placa", "plana", "plano", "plato", "plebe", "plena", "pleno", "plota", "ploto", "pluga", "plugo", "pluma", "pneus",
            "pobre", "pocao", "pocas", "pocos", "podai", "podam", "podar", "podas", "podei", "podem", "poder", "podes", "podia", "podio", "podou", "poema",
            "poeta", "polar", "polca", "polia", "polir", "polis", "poliu", "polos", "polpa", "polvo", "pomar", "pomba", "pombo", "pomos", "pompa", "ponca",
            "ponde", "pondo", "ponei", "ponha", "ponho", "ponta", "ponte", "ponto", "porao", "poras", "porca", "porco", "porem", "pores", "poria", "poros",
            "porra", "porre", "porta", "porte", "porto", "posai", "posam", "posar", "posas", "posei", "posem", "poses", "posou", "possa", "posse", "posso",
            "posta", "poste", "posto", "potes", "potro", "pouca", "pouco", "poupa", "poupo", "pousa", "pouso", "povao", "povoa", "povoo", "praca", "prado",
            "praga", "praia", "prata", "prato", "praxe", "prazo", "prece", "preco", "prega", "prego", "prelo", "prema", "preme", "premi", "premo", "prepoe",
            "presa", "preso", "preve", "previ", "preza", "prezo", "prima", "primo", "priva", "privo", "proas", "prole", "propoe", "prosa", "prova", "provo",
            "prumo", "pubis", "puder", "pudim", "pudor", "pulai", "pulam", "pular", "pulas", "pulei", "pulem", "pules", "pulga", "pulos", "pulou", "pulsa",
            "pulso", "pumas", "punam", "punas", "punem", "punes", "punha", "punho", "punia", "punir", "punis", "puniu", "puras", "purga", "purgo",
            "puros", "puser", "putas", "putos", "puxai", "puxam", "puxar", "puxas", "puxei", "puxem", "puxes", "puxou", "quais", "qual", "quando", "quase",
            "quati", "quebe", "queda", "quede", "quedo", "queia", "queie", "queio", "queis", "queixa", "queixo", "quemi", "quena", "quere", "queri", "quero",
            "queto", "quilo", "quina", "quino", "quipa", "quite", "quiti", "quito", "quiui", "quoc", "quota", "rabos", "racao", "racha", "racho", "radar",
            "radia", "radio", "raiai", "raiam", "raiar", "raias", "raiei", "raiem", "raies", "raio", "raios", "raiou", "raiva", "rajai", "rajam", "rajar",
            "rajas", "rajei", "rajem", "rajes", "rajou", "ralai", "ralam", "ralar", "ralas", "ralei", "ralem", "rales", "ralha", "ralho", "ralos", "ralou",
            "ramal", "ramos", "rampa", "ranas", "ranco", "range", "rangi", "ranja", "ranjo", "rapai", "rapam", "rapar", "rapas", "rapaz", "rapei", "rapel",
            "rapem", "rapes", "rapou", "rapta", "rapto", "raras", "rarea", "rareo", "raros", "rasas", "rasga", "rasgo", "rasos", "raspa", "raspo", "rasto",
            "ratas", "ratea", "ratos", "razao", "reagi", "reais", "reaja", "reajo", "reata", "reato", "reave", "reavi", "reboa", "reboo", "recai", "recea",
            "recebe", "recebi", "receio", "recem", "recha", "recho", "recife", "recria", "recrio", "recua", "recuo", "redea", "redes", "redil", "redor",
            "redox", "reduz", "refaz", "refem", "refez", "refila", "refilo", "refiz", "reflu", "regei", "regem", "reger", "reges", "regeu", "regia", "regio",
            "regra", "regro", "regua", "reiam", "reias", "reido", "reima", "reina", "reino", "rejam", "rejas", "reler", "reles", "releu", "relia", "relva",
            "remai", "remam", "remar", "remas", "remei", "remem", "remes", "remia", "remir", "remis", "remiu", "remoi", "remo", "remos", "remou", "renal",
            "renas", "renda", "rende", "rendi", "rendo", "rente", "repoe", "repor", "repos", "repus", "reses", "resma", "resta", "resto", "retas", "retem",
            "reter", "reteve", "retos", "reuna", "reune", "reuni", "reuno", "reus", "rever", "reves", "revia", "revir", "reviu", "rezai", "rezam", "rezar",
            "rezas", "rezei", "rezem", "rezes", "rezou", "riais", "riamo", "ribas", "ricas", "ricos", "rides", "rieis", "rifai", "rifam", "rifar", "rifas",
            "rifei", "rifem", "rifes", "rifle", "rifou", "rigor", "rijas", "rijos", "rimai", "rimam", "rimar", "rimas", "rimei", "rimem", "rimes", "rimos",
            "rimou", "rindo", "ripas", "rires", "risca", "risco", "risos", "riste", "ritmo", "ritos", "rival", "rixas", "roais", "roamo", "robalo", "rocha",
            "rocio", "rodai", "rodam", "rodar", "rodas", "rodea", "rodei", "rodem", "rodes", "rodos", "rodou", "roeis", "roera", "rogai", "rogam", "rogar",
            "rogas", "rogos", "rogou", "rogue", "rojao", "rolai", "rolam", "rolar", "rolas", "rolei", "rolem", "roles", "rolha", "rolos", "rolou", "romas",
            "rombo", "romeu", "rompa", "rompe", "rompi", "rompo", "ronca", "ronco", "ronda", "rondo", "roque", "rosas", "rosca", "rosna", "rosno", "rosto",
            "rotas", "rotea", "rotos", "rouba", "roubo", "rouca", "rouco", "roupa", "roxas", "roxos", "rubi", "rubis", "rublo", "rubra", "rubro", "rudes",
            "ruela", "rufai", "rufam", "rufar", "rufas", "rufei", "rufem", "rufes", "rufou", "rugai", "rugam", "rugar", "rugas", "rugbi", "rugia", "rugir",
            "rugis", "rugiu", "rugou", "rugue", "ruiam", "ruias", "ruido", "ruim", "ruina", "ruins", "ruira", "ruiva", "ruivo", "rujam", "rujas", "rumai",
            "rumam", "rumar", "rumas", "rumei", "rumem", "rumes", "rumor", "rumos", "rumou", "rural", "rusga", "russa", "russo", "saara", "sabao", "sabei",
            "sabem", "saber", "sabes", "sabia", "sabio", "sabor", "sabre", "sacai", "sacam", "sacar", "sacas", "sacha", "sacho", "sacia", "sacio", "sacis",
            "sacos", "sacou", "sacra", "sacro", "sadia", "sadio", "safai", "safam", "safar", "safas", "safei", "safem", "safes", "safou", "safra", "sagas",
            "sagra", "sagro", "saiam", "saias", "saiba", "saida", "saido", "saira", "salao", "salas", "salda", "saldo", "sales", "salga", "salgo", "salmo",
            "salsa", "salta", "salto", "salva", "salve", "salvo", "sama", "samba", "sampa", "sanai", "sanam", "sanar", "sanas", "sanca", "sande", "sanei",
            "sanem", "sanes", "sanga", "sanha", "sanja", "sanou", "santa", "santo", "sapos", "saque", "sarai", "saram", "sarar", "saras", "sarda", "sarei",
            "sarem", "sares", "saria", "sarna", "sarou", "sauda", "saude", "saudo", "sauna", "sauva", "saxao", "seara", "sebes", "sebos", "secai", "secam",
            "secar", "secas", "secos", "secou", "sedas", "sedes", "sedia", "sedie", "sedio", "seduz", "segue", "segui", "seiam", "seias", "seios", "seita",
            "seiva", "seixo", "sejam", "sejas", "selai", "selam", "selar", "selas", "selei", "selem", "seles", "selim", "selos", "selou", "selva", "semea",
            "semen", "senao", "senda", "sendo", "senha", "senho", "senos", "sensu", "senta", "sente", "senti", "sento", "sepia", "seque", "serao", "seras",
            "serei", "serem", "seres", "seria", "serie", "serio", "serra", "serro", "serva", "serve", "servi", "servo", "sesta", "setas", "setor", "sexta",
            "sexto", "sifao", "sigam", "sigas", "sigla", "sigma", "signo", "sigo", "silas", "silex", "silos", "silva", "silvo", "simao", "simio", "sinal",
            "sinas", "sinos", "sinta", "sinto", "sirene", "siria", "sirio", "siris", "sirva", "serve", "servi", "servo", "sisma", "sismo", "sitas", "sitia",
            "sitio", "situa", "situo", "soado", "soais", "soara", "soava", "sobra", "sobre", "sobro", "socai", "socam", "socar", "socas", "socia", "socio",
            "socos", "socou", "sodio", "sofas", "sofra", "sofre", "sofri", "sofro", "sogra", "sogro", "solai", "solam", "solar", "solas", "solda", "soldo",
            "solei", "solem", "soles", "solos", "solou", "solta", "solto", "somai", "somam", "somar", "somas", "somei", "somem", "somes", "somos", "somou",
            "sonda", "sondo", "sonha", "sonho", "sonia", "sonos", "sonsa", "sonso", "sopas", "sopes", "sopra", "sopro", "soque", "soros", "sorri", "sorta",
            "sorte", "sorti", "sorva", "sorve", "sorvi", "sorvo", "sosse", "sotia", "sotao", "sotos", "soube", "sousa", "souza", "sovai", "sovam", "sovar",
            "sovas", "sovei", "sovem", "soves", "sovou", "suada", "suado", "suais", "suara", "suava", "suave", "subam", "subas", "subia", "subir", "subis",
            "subiu", "sucos", "sudao", "sueca", "sueco", "sueis", "sueto", "suevos", "sufis", "sufle", "sugai", "sugam", "sugar", "sugas", "sugou", "sugue",
            "suica", "suico", "suina", "suino", "suite", "sujai", "sujam", "sujar", "sujas", "sujei", "sujem", "sujes", "sujos", "sujou", "sulca", "sulco",
            "sulia", "sumam", "sumas", "sumia", "sumir", "sumis", "sumiu", "sunga", "super", "supoe", "supor", "supos", "supra", "supre", "supri", "supro",
            "supus", "surda", "surdo", "surge", "surgi", "surja", "surjo", "surra", "surta", "surte", "surti", "surto", "susta", "susto", "sutia", "sutil",
            "sutis", "tabas", "tacos", "talao", "talas", "talco", "talha", "talhe", "talho", "talos", "tampa", "tampo", "tanga", "tange", "tangi", "tanjo",
            "tanta", "tanto", "tapai", "tapam", "tapar", "tapas", "tapei", "tapem", "tapes", "tapir", "tapou", "taque", "taras", "tarda", "tarde", "tardo",
            "tarja", "tate", "tato", "tatus", "taxai", "taxam", "taxar", "taxas", "taxei", "taxem", "taxes", "taxi", "taxis", "taxou", "tecam", "tecas",
            "tecei", "tecem", "tecer", "teces", "teceu", "tecia", "tecla", "teclo", "tedio", "teias", "teima", "teimo", "teipe", "telas", "teles", "telha",
            "telao", "temam", "temas", "temei", "temem", "temer", "temes", "temeu", "temia", "temor", "temos", "tempe", "tempo", "tenaz", "tenda", "tende",
            "tendi", "tendo", "tenha", "tenho", "tenis", "tenor", "tenra", "tenro", "tensa", "tenso", "tenta", "tente", "tento", "tenue", "terao", "teras",
            "terca", "terco", "terei", "terem", "teres", "teria", "termo", "terna", "terno", "terra", "tesao", "tesas", "teses", "tesos", "testa", "teste",
            "testo", "tetas", "tetos", "textil", "texto", "tiago", "tiara", "tibia", "tibio", "ticao", "tidas", "tidos", "tiete", "tigre", "times", "timao",
            "tinam", "tinas", "tinem", "tines", "tinge", "tingi", "tinha", "tinia", "tinir", "tinis", "tiniu", "tinta", "tinto", "tipos", "tirai", "tiram",
            "tirar", "tiras", "tirei", "tirem", "tires", "tiros", "tirou", "titas", "titia", "titio", "titub", "toada", "tocai", "tocam", "tocar", "tocas",
            "tocha", "tocou", "todas", "todos", "togas", "tolas", "toldo", "tolha", "tolhe", "tolhi", "tolho", "tolos", "tomai", "tomam", "tomar", "tomas",
            "tomba", "tombo", "tomei", "tomem", "tomes", "tomou", "tonel", "tonta", "tonto", "topai", "topam", "topar", "topas", "topei", "topem", "topes",
            "topos", "topou", "toque", "toras", "torax", "torca", "torce", "torci", "torco", "torda", "tordo", "torna", "torne", "torno", "toros", "torpe",
            "torra", "torre", "torro", "torta", "torto", "tosca", "tosco", "tosse", "tossi", "tosta", "tosto", "total", "totem", "touca", "touro",
            "traca", "trace", "traco", "traem", "traga", "trago", "traia", "traje", "trajo", "trama", "trapo", "trara", "trata", "trate", "trato", "trava",
            "trave", "travo", "traze", "treco", "trema", "treme", "tremi", "tremo", "trena", "treno", "trens", "trepa", "trepo", "treta", "treva", "trevo",
            "treze", "tribo", "trigo", "trilha", "trilho", "trina", "trino", "trios", "tripa", "troca", "troco", "troia", "tropa", "trota", "trote", "troto",
            "trova", "trunf", "truta", "tubos", "tufao", "tufos", "tumba", "tumor", "tunel", "tunes", "turba", "turbo", "turca", "turco", "turma", "turno",
            "turva", "turvo", "tussa", "tussi", "tusso", "tutor", "ufana", "ufano", "uivam", "uivar", "uivas", "uivos", "uivou", "ultra", "ulula", "ululo",
            "unais", "uncao", "unemo", "ungem", "unges", "ungia", "ungir", "ungis", "ungiu", "unhas", "uniam", "unias", "uniao", "unida", "unido",
            "unimo", "unira", "unita", "urano", "urdam", "urdas", "urdem", "urdes", "urdia", "urdir", "urdis", "urdiu", "ureia", "urgia", "urgir",
            "urgis", "urgiu", "urina", "urino", "urnas", "urrai", "urram", "urrar", "urras", "urrei", "urrem", "urres", "urros", "urrou", "ursas", "ursos",
            "urubu", "usada", "usado", "usais", "usara", "usava", "useis", "usemo", "usina", "usual", "utero", "vacas", "vacuo", "vadea", "vades", "vadia",
            "vadio", "vaga", "vagas", "vagem", "vagia", "vagir", "vagis", "vagiu", "vagos", "vaiai", "vaiam", "vaiar", "vaias", "vaiei", "vaiem", "vaies",
            "vaiou", "valas", "valde", "valei", "valem", "valer", "vales", "valeu", "valha", "valho", "valia", "valor", "valos", "valsa", "vamos", "vapor",
            "varai", "varal", "varam", "varao", "varar", "varas", "varei", "varem", "vares", "varia", "vario", "variz", "varou", "vasos", "vasta", "vasto",
            "vates", "vaza", "vazao", "vazam", "vazas", "vazei", "vazem", "vazes", "vazia", "vazio", "vazou", "veado", "vedai", "vedam", "vedar", "vedas",
            "vedei", "vedem", "vedes", "vedou", "veem", "veias", "vejai", "vejam", "vejas", "velai", "velam", "velar", "velas", "velei", "velem", "veles",
            "velha", "velho", "velos", "velou", "veloz", "vemos", "venal", "venca", "vence", "venci", "venco", "venda", "vendo", "venha", "venho", "venia",
            "venta", "vento", "verao", "veras", "verba", "verbo", "verde", "verei", "verem", "veres", "verga", "veria", "verme", "versa", "verso", "vesga",
            "vesgo", "vespa", "veste", "vesti", "vetai", "vetam", "vetar", "vetas", "vetei", "vetem", "vetes", "vetor", "vetou", "vexai", "vexam", "vexar",
            "vexas", "vexei", "vexem", "vexes", "vexou", "vezes", "viaja", "viajo", "viana", "vibra", "vibro", "vicia", "vicio", "vidas", "video", "vidra",
            "vidro", "vieis", "viela", "viena", "viera", "vies", "viga", "vigas", "vigia", "vigie", "vigio", "vigor", "vilas", "viloes", "vinco", "vinda",
            "vinde", "vindo", "vinha", "vinho", "vinte", "viola", "violo", "virai", "viram", "virao", "virar", "viras", "virei", "virem", "vires", "viria",
            "viril", "viris", "virou", "virus", "visai", "visam", "visao", "visar", "visas", "visei", "visem", "vises", "visou", "visse", "vista", "visto",
            "vital", "vitas", "vitus", "viuva", "viuvo", "vivam", "vivas", "vivaz", "vivei", "vivem", "viver", "vives", "viveu", "vivia", "vivos", "voado",
            "voais", "voara", "voava", "voces", "vodca", "voeis", "voila", "volpi", "volta", "volto", "volva", "volve", "volvi", "volvo", "voraz", "vossa",
            "vosso", "votai", "votam", "votar", "votas", "votei", "votem", "votes", "votos", "votou", "vovos", "vozes", "vulgo", "vulto", "vulva", "xales",
            "xaras", "xelim", "xeque", "xerox", "xinga", "xingo", "xiita", "xisto", "xucra", "xucro", "zanga", "zango", "zarpa", "zarpo", "zebu", "zelai",
            "zelam", "zelar", "zelas", "zelei", "zelem", "zeles", "zelou", "zomba", "zombo", "zonas", "zonza", "zonzo", "zumba", "zumbi", "zune", "zuni",
            "zunir", "zunis", "zurra", "zurro"
        ];
    },

    filter(criteria) {
        const { greenPattern, includedLetters, excludedLetters, yellowPositions } = criteria;
        const searchRegex = new RegExp(`^${greenPattern}$`);

        return this.wordList.filter(word => {
            if (!searchRegex.test(word)) return false;
            if (excludedLetters.some(letter => word.includes(letter))) return false;
            if (!includedLetters.every(letter => word.includes(letter))) return false;
            
            for (let i = 0; i < 5; i++) {
                if (yellowPositions[i].includes(word[i])) {
                    return false;
                }
            }
            return true;
        });
    }
};

const view = {
    elements: {
        patternInputs: document.querySelectorAll('#pattern-container input'),
        yellowPositionInputs: document.querySelectorAll('#yellow-positions-container input'),
        includedInput: document.getElementById('included-letters'),
        excludedInput: document.getElementById('excluded-letters'),
        searchButton: document.getElementById('search-button'),
        resultsHeader: document.getElementById('results-header'),
        resultsList: document.getElementById('results-list')
    },

    sanitize(str) {
        return [...new Set(str.replace(/\s/g, '').toLowerCase().split(''))].filter(Boolean);
    },

    getCriteria() {
        const greenPattern = Array.from(this.elements.patternInputs).map(input => input.value.toLowerCase() || '.').join('');
        const includedLetters = this.sanitize(this.elements.includedInput.value);
        const excludedLetters = this.sanitize(this.elements.excludedInput.value);
        const yellowPositions = Array.from(this.elements.yellowPositionInputs).map(input => this.sanitize(input.value));
        return { greenPattern, includedLetters, excludedLetters, yellowPositions };
    },

    displayResults(words) {
        this.elements.resultsList.innerHTML = '';
        if (words.length > 0) {
            this.elements.resultsHeader.textContent = `Encontramos ${words.length} palavra(s) possível(is):`;
            words.forEach(word => {
                const wordElement = document.createElement('div');
                wordElement.className = 'p-2 bg-gray-100 rounded-md font-mono text-lg tracking-widest';
                wordElement.textContent = word.toUpperCase();
                this.elements.resultsList.appendChild(wordElement);
            });
        } else {
            this.elements.resultsHeader.textContent = 'Nenhuma palavra encontrada com esses critérios. Verifique as letras digitadas.';
        }
    },
    
    displayError(message) {
        this.elements.resultsHeader.textContent = message;
        this.elements.resultsList.innerHTML = '';
    },

    setButtonState(disabled, text) {
        this.elements.searchButton.disabled = disabled;
        this.elements.searchButton.textContent = text;
    },

    setupEventListeners(controller) {
        this.elements.searchButton.addEventListener('click', () => controller.handleSearch());
        
        const allInputs = [...this.elements.patternInputs, ...this.elements.yellowPositionInputs, this.elements.includedInput, this.elements.excludedInput];
        allInputs.forEach(input => {
            input.addEventListener('keyup', (event) => {
                if (event.key === 'Enter') {
                    controller.handleSearch();
                }
            });
        });

        this.elements.patternInputs.forEach((input, index) => {
            input.addEventListener('input', () => {
                if (input.value && index < this.elements.patternInputs.length - 1) {
                    this.elements.patternInputs[index + 1].focus();
                }
            });
            input.addEventListener('keydown', (event) => {
                if (event.key === 'Backspace' && !input.value && index > 0) {
                    this.elements.patternInputs[index - 1].focus();
                }
            });
        });
    }
};

const controller = {
    init() {
        view.setButtonState(true, 'Inicializando...');
        model.init();
        view.setupEventListeners(this);
        view.setButtonState(false, 'Buscar Palavras');
        view.elements.resultsHeader.textContent = `Dicionário com ${model.wordList.length} palavras carregado. Pronto para buscar!`;
    },

    handleSearch() {
        const criteria = view.getCriteria();
        
        const greenLetters = view.sanitize(criteria.greenPattern.replace(/\./g, ''));
        const allPositiveLetters = [...new Set([...greenLetters, ...criteria.includedLetters])];
        const contradiction = allPositiveLetters.find(l => criteria.excludedLetters.includes(l));

        if (contradiction) {
            view.displayError(`Lógica inválida: A letra '${contradiction.toUpperCase()}' não pode ser inclusa e excluída ao mesmo tempo.`);
            return;
        }
        
        const filteredWords = model.filter(criteria);
        view.displayResults(filteredWords);
    }
};

document.addEventListener('DOMContentLoaded', () => controller.init());
