// PREGUNTES D'EXAMEN - SISTEMES DIGITALS (VHDL)
// Basat en els exàmens 08/01/2025 i 27/01/2025 i tota la teoria del curs

// ============== BLOC 1: PROCESSOS I SENSITIVITY LISTS ==============

anadir_pregunta(
  "Quin és el problema si un procés combinacional no inclou totes les entrades a la sensitivity list?",
  "Es pot inferir un latch transparent no desitjat",
  "El procés no es compilarà",
  "Les assignacions seran massa ràpides",
  "El simulador donarà un error fatal"
);

anadir_pregunta(
  "En un procés amb sensitivity list, quan se suspèn l'execució del procés?",
  "Després d'executar tots els statements del procés",
  "Quan es troba un wait statement",
  "Quan hi ha un canvi en qualsevol senyal",
  "Al final de cada delta cycle"
);

anadir_pregunta(
  "Quina és la diferència principal entre signal i variable en VHDL?",
  "Les variables s'assignen immediatament, els signals programen esdeveniments",
  "Els signals només es poden usar en processos",
  "Les variables no es poden sintetitzar mai",
  "Els signals són més ràpids en simulació"
);

anadir_pregunta(
  "Si un procés té 'wait for 10 ns;' i després 'wait for 5 ns;', quin és el comportament?",
  "Primer espera 10ns, després espera 5ns més (total 15ns des de l'inici del procés)",
  "Només espera 10ns (ignora el segon wait)",
  "Espera 15ns simultàniament",
  "Dona error de compilació"
);

// ============== BLOC 2: DELTA DELAYS I SIMULACIÓ ==============

anadir_pregunta(
  "Què és un 'delta delay' en VHDL?",
  "Un retard infinitesimal que permet ordenar esdeveniments al mateix instant de simulació",
  "Un retard de 1 nanosegon per defecte",
  "Un error de temporització",
  "La diferència entre rising_edge i falling_edge"
);

anadir_pregunta(
  "En un procés amb 'B <= A;' i 'C <= B;', en quin ordre s'actualitzen els signals?",
  "B i C s'actualitzen simultàniament després d'1 delta, però C pren el valor ANTIC de B",
  "B s'actualitza immediatament i després C",
  "C s'actualitza abans que B",
  "Tots dos s'actualitzen amb el mateix valor simultàniament"
);

anadir_pregunta(
  "Si tenim 'inter1 <= resize(signed(in1), 5) + resize(signed(in2), 5);' en un procés i després en un altre procés llegim inter1, quan estarà disponible el nou valor?",
  "Després d'1 delta delay",
  "Immediatament a la següent línia",
  "Després de 1 ns",
  "Al següent flanc de rellotge"
);

// ============== BLOC 3: SÍNTESI COMBINACIONAL ==============

anadir_pregunta(
  "Quina condició NO provoca la inferència d'un latch transparent?",
  "Un procés amb sensitivity list completa i tots els casos del case statement coberts",
  "Un if sense else en un procés combinacional",
  "Un case sense 'when others' i no es cobreixen tots els casos",
  "Assignar un signal només en algunes branques d'un if"
);

anadir_pregunta(
  "En una porta NAND cMOS de 3 entrades, quants transistors es necessiten?",
  "6 transistors (3 nMOS en sèrie, 3 pMOS en paral·lel)",
  "3 transistors",
  "9 transistors",
  "12 transistors"
);

anadir_pregunta(
  "Per què les portes NAND són preferides a les NOR en tecnologia cMOS?",
  "Els transistors pMOS tenen major resistència 'on' que els nMOS, i a la NAND estan en paral·lel",
  "Les NAND són més ràpides sempre",
  "Les NOR consumeixen més potència",
  "Les NAND ocupen menys àrea"
);

anadir_pregunta(
  "Què passa si en un procés combinacional no assignem valor per defecte a una sortida?",
  "Es pot inferir un latch si no s'assigna en totes les branques",
  "El compilador assigna '0' automàticament",
  "La sortida queda en alta impedància",
  "Dona error de compilació sempre"
);

// ============== BLOC 4: SÍNTESI SEQÜENCIAL ==============

anadir_pregunta(
  "Quin és l'ordre correcte dels statements per un flip-flop amb reset asíncron?",
  "if reset = '1' then ... elsif rising_edge(clock) then ...",
  "if rising_edge(clock) then if reset = '1' then ...",
  "if reset = '1' and rising_edge(clock) then ...",
  "wait until reset = '0'; if rising_edge(clock) then ..."
);

anadir_pregunta(
  "Què s'infereix amb aquest codi: 'if rising_edge(clk) then if enable='1' then Q<=D; end if; end if;'?",
  "Un flip-flop amb clock enable",
  "Un latch transparent",
  "Un flip-flop sense enable",
  "Una porta combinacional"
);

anadir_pregunta(
  "En un procés síncron, cada signal assignat dins del 'if rising_edge(clock)' implica:",
  "Un registre (flip-flop)",
  "Una porta combinacional",
  "Un latch",
  "Un buffer tristate"
);

anadir_pregunta(
  "Si volem un reset síncron, on ha d'anar la comprovació del reset?",
  "Dins del 'if rising_edge(clock)' com a primer statement",
  "Abans del 'if rising_edge(clock)'",
  "Després d'assignar els valors",
  "En un procés separat"
);

// ============== BLOC 5: TIPUS DE DADES ==============

anadir_pregunta(
  "Quin és el valor per defecte d'un signal Std_logic no inicialitzat?",
  "'U' (Uninitialized)",
  "'X' (Unknown)",
  "'0'",
  "'Z' (High impedance)"
);

anadir_pregunta(
  "Quina és la diferència entre 'signed' i 'unsigned' en Numeric_Std?",
  "signed interpreta el bit més significatiu com a signe, unsigned tots els bits com a magnitud",
  "signed només permet valors negatius",
  "unsigned és més ràpid en síntesi",
  "No hi ha diferència, només el nom"
);

anadir_pregunta(
  "Com es converteix un integer a std_logic_vector?",
  "std_logic_vector(to_unsigned(N, num_bits)) o std_logic_vector(to_signed(N, num_bits))",
  "std_logic_vector(N)",
  "to_std_logic_vector(N)",
  "integer_to_vector(N)"
);

anadir_pregunta(
  "Què retorna l'atribut V'length per un Std_logic_vector(7 downto 0)?",
  "8",
  "7",
  "0",
  "Depèn del valor de V"
);

anadir_pregunta(
  "Quin és el resultat de '0000' < '111' en Std_logic_vector?",
  "true (perquè '0' < '1' al primer bit diferent)",
  "false (perquè '0000' és més llarg)",
  "false (perquè 0 < 7 en decimal)",
  "Error de compilació"
);

// ============== BLOC 6: OPERADORS ARITMÈTICS ==============

anadir_pregunta(
  "Per què el senyal 'out1_32' a multiplier és unsigned de 32 bits si els operands són de 16?",
  "L'operador '*' retorna un resultat amb bits igual a la suma dels bits dels operands",
  "'*' sempre retorna 32 bits",
  "'*' retorna el doble de bits del operand més gran",
  "És un error del codi"
);

anadir_pregunta(
  "Si A és signed(3 downto 0) i B és signed(2 downto 0), com sumem correctament A+B en F signed(4 downto 0)?",
  "F <= resize(A, 5) + resize(B, 5);",
  "F <= A + B;",
  "F <= signed(A) + signed(B);",
  "F <= extend(A, 5) + extend(B, 5);"
);

anadir_pregunta(
  "Quin operador NO és sintetitzable amb valors arbitraris en VHDL?",
  "/ (divisió per valors no constants o no potències de 2)",
  "+ (suma)",
  "* (multiplicació)",
  "- (resta)"
);

anadir_pregunta(
  "Què fa l'operador 'srl' amb signed/unsigned?",
  "Shift right logical - desplaça a la dreta omplint amb '0'",
  "Shift right amb extensió de signe",
  "Rotate right",
  "Set right logic"
);

// ============== BLOC 7: MÀQUINES D'ESTATS (FSM) ==============

anadir_pregunta(
  "Quina és la diferència entre una FSM Moore i una Mealy?",
  "Moore: sortides depenen només de l'estat. Mealy: sortides depenen de l'estat i les entrades",
  "Moore té menys estats que Mealy",
  "Mealy és més ràpida sempre",
  "Moore no es pot sintetitzar"
);

anadir_pregunta(
  "En una FSM amb tipus enumerat de 3 estats i codificació binària, quants flip-flops es necessiten?",
  "2 flip-flops (poden representar 4 estats)",
  "3 flip-flops",
  "1 flip-flop",
  "4 flip-flops"
);

anadir_pregunta(
  "Per què és perillós aplicar entrades asíncrones directament a una FSM?",
  "Els flip-flops d'estat poden veure els canvis en instants diferents provocant estats erronis",
  "La FSM es reseteja automàticament",
  "Les entrades asíncrones no es poden llegir",
  "La síntesi no permet entrades asíncrones"
);

anadir_pregunta(
  "En una FSM amb reset asíncron, on s'ha d'assignar l'estat inicial?",
  "Dins del 'if a_reset = '1'' abans del elsif rising_edge(clock)",
  "Al declarar el signal curr_s",
  "Després del case statement",
  "En un procés separat"
);

// ============== BLOC 8: MEMÒRIES ==============

anadir_pregunta(
  "Com es declara una RAM de 1024 posicions de 8 bits?",
  "type RAM_TYPE is array (0 to 1023) of std_logic_vector(7 downto 0);",
  "signal RAM: std_logic_vector(1023 downto 0, 7 downto 0);",
  "array RAM[1024][8];",
  "memory RAM(1024, 8);"
);

anadir_pregunta(
  "Quina és la diferència entre una ROM i una RAM en VHDL?",
  "ROM es declara com a constant amb valors inicials, RAM com a signal que es pot escriure",
  "ROM és més ràpida",
  "RAM no es pot sintetitzar",
  "No hi ha diferència en el codi"
);

anadir_pregunta(
  "Com s'accedeix a una posició de memòria si l'adreça és std_logic_vector?",
  "RAM(to_integer(unsigned(address)))",
  "RAM(address)",
  "RAM[to_int(address)]",
  "RAM(integer(address))"
);

anadir_pregunta(
  "Què infereix la síntesi si llegim i escrivim una RAM dins d'un 'if rising_edge(clock)'?",
  "Block RAM (memòria síncroma implementada en recursos dedicats del FPGA)",
  "Memòria distribuïda amb LUTs",
  "Registres individuals",
  "No es pot sintetitzar"
);

// ============== BLOC 9: TESTBENCHES ==============

anadir_pregunta(
  "Quina és la característica d'un testbench en VHDL?",
  "És una entitat sense ports que instància el DUT i genera estímuls",
  "És una entitat amb ports d'entrada per als test vectors",
  "No pot tenir processos",
  "Sempre s'ha de sintetitzar"
);

anadir_pregunta(
  "Com es genera un rellotge en un testbench?",
  "Amb un procés que alterna clock <= '0'; wait for period/2; clock <= '1'; wait for period/2;",
  "Amb clock <= not clock after period;",
  "Declarant clock com a input",
  "El simulador el genera automàticament"
);

anadir_pregunta(
  "Quin package es necessita per llegir/escriure fitxers de text en VHDL?",
  "Std.textio i IEEE.std_logic_textio",
  "IEEE.numeric_std",
  "IEEE.file_io",
  "Std.file_manager"
);

anadir_pregunta(
  "Com es para un procés en un testbench després de generar els estímuls?",
  "Amb 'wait;' al final del procés (espera indefinida)",
  "Amb 'stop;'",
  "Amb 'end simulation;'",
  "El procés es para automàticament"
);

// ============== BLOC 10: CONFIGURACIÓ I JERARQUIA ==============

anadir_pregunta(
  "Per què serveix un 'component' en VHDL?",
  "Per declarar la interfície d'una entitat que volem instanciar sense necessitat que estigui compilada",
  "Per crear nous tipus de dades",
  "Per definir constants",
  "Per declarar subprogrames"
);

anadir_pregunta(
  "Què fa una 'configuration' en VHDL?",
  "Enllaça components amb entitats/arquitectures específiques durant l'elaboració",
  "Configura els paràmetres de síntesi",
  "Defineix les constants del disseny",
  "Gestiona els fitxers del projecte"
);

anadir_pregunta(
  "En quin ordre s'han de compilar els fitxers VHDL?",
  "Primer les entitats que no tenen dependències, després les que les instancien",
  "Alfabèticament",
  "En qualsevol ordre, el compilador ho resol",
  "Primer els testbenches"
);

anadir_pregunta(
  "Què és 'direct instantiation' en VHDL?",
  "Instanciar directament una entitat sense declarar component: 'U1: entity work.my_entity(arch)'",
  "Declarar un component i instanciar-lo",
  "Usar una configuration",
  "Instanciar dins d'un process"
);

// ============== BLOC 11: GENERICS I GENERATE ==============

anadir_pregunta(
  "Per què serveixen els 'generic' en VHDL?",
  "Per parametritzar dissenys amb valors que es poden canviar a la instanciació",
  "Per declarar signals globals",
  "Per crear components opcionals",
  "Per definir el rellotge del sistema"
);

anadir_pregunta(
  "Com s'utilitza un generic en un port map?",
  "generic map (PARAM => valor) port map (port_name => signal_name)",
  "port map (generic => valor, port => signal)",
  "Els generics no van amb port map",
  "generic(PARAM) port map(port)"
);

anadir_pregunta(
  "Què fa el statement 'generate' en VHDL?",
  "Crea múltiples instàncies de components o processos basant-se en un rang o condició",
  "Genera codi automàticament durant la síntesi",
  "Crea processos concurrents",
  "És un tipus de loop dins de processos"
);

anadir_pregunta(
  "Quin és un exemple d'ús de 'for...generate'?",
  "Crear un bus de registres: for i in 0 to 7 generate REG: entity work.register...",
  "Fer un loop dins d'un procés",
  "Generar un rellotge",
  "Declarar múltiples signals"
);

// ============== BLOC 12: CODI DELS EXÀMENS - ANÀLISI ==============

anadir_pregunta(
  "En el CODI 1 de l'examen 08/01/2025, si in1=7, in2=3 i ctrl='0', quin és el valor de out1?",
  "4 (resize(signed(7),5) - resize(signed(3),5) = 7-3 = 4)",
  "10",
  "-4",
  "3"
);

anadir_pregunta(
  "En el CODI 2 de l'examen 08/01/2025, si in1=4 i in2=10, quin valor té out1 quan op='00'?",
  "116 (A²+B² = 16+100 = 116)",
  "14",
  "40",
  "54"
);

anadir_pregunta(
  "En el CODI 3 de l'examen 08/01/2025, què implementa el procés p2?",
  "Un registre de desplaçament a esquerra de 8 bits",
  "Un registre de desplaçament a dreta de 8 bits",
  "Un comptador de 8 bits",
  "Una memòria de 8 posicions"
);

anadir_pregunta(
  "En el CODI 4 de l'examen 08/01/2025, en quin estat estarà la FSM a 30ns?",
  "set_time (després de: disp_time → settings → set_time)",
  "disp_time",
  "sports",
  "trail_run"
);

anadir_pregunta(
  "En el CODI 1 de l'examen 27/01/2025, quina operació fa el cas ctrl='10'?",
  "Rotate right de inter2 en 2 posicions (inter2 ror 2)",
  "Shift right de inter2",
  "Multiplicació de inter1 * inter2",
  "Suma de inter1 + inter2"
);

anadir_pregunta(
  "En el CODI 2 de l'examen 27/01/2025, què fa el component 'dmx'?",
  "Un demultiplexor que envia in1 a una de les 4 sortides segons sel",
  "Un multiplexor de 4 entrades",
  "Un sumador de 4 entrades",
  "Un comparador"
);

anadir_pregunta(
  "En el CODI 3 de l'examen 27/01/2025, el disseny 'thing' implementa:",
  "Una conversió de paral·lel a sèrie (serialitza dades de 8 bits)",
  "Una conversió de sèrie a paral·lel",
  "Un comptador de 8 bits",
  "Una FSM de 8 estats"
);

// ============== BLOC 13: TEMPORITZACIÓ I CÀRREGA ==============

anadir_pregunta(
  "Què és el 'fan-out' d'una sortida?",
  "El nombre màxim d'entrades que pot atacar mantenint els nivells de voltatge vàlids",
  "La velocitat màxima de la sortida",
  "El corrent de sortida màxim",
  "El nombre de transistors de sortida"
);

anadir_pregunta(
  "Què provoca una càrrega capacitiva elevada en una sortida?",
  "Augmenta els temps de rise i fall (transició més lenta)",
  "Millora la immunitat al soroll",
  "Redueix el consum de potència",
  "Accelera les transicions"
);

anadir_pregunta(
  "En una sortida 'open-drain' (drenador obert), quin és el principal problema?",
  "Temps de rise molt lent degut a la resistència de pull-up",
  "No pot forçar '0'",
  "Consum de potència excessiu",
  "No es pot sintetitzar"
);

anadir_pregunta(
  "Què és el 'setup time' d'un flip-flop?",
  "El temps mínim que la dada ha d'estar estable ABANS del flanc de rellotge",
  "El temps que triga a estabilitzar-se la sortida",
  "El temps mínim entre flancs de rellotge",
  "El temps de propagació del flip-flop"
);

anadir_pregunta(
  "Què és el 'hold time' d'un flip-flop?",
  "El temps mínim que la dada ha d'estar estable DESPRÉS del flanc de rellotge",
  "El temps que la sortida manté el valor",
  "El temps màxim de propagació",
  "El temps d'establiment"
);

// ============== BLOC 14: ATRIBUTS I FUNCIONS ==============

anadir_pregunta(
  "Què retorna l'atribut A'range si A és std_logic_vector(7 downto 0)?",
  "7 downto 0",
  "8",
  "0 to 7",
  "7"
);

anadir_pregunta(
  "Quin és el valor de A'left si A és std_logic_vector(7 downto 0)?",
  "7",
  "0",
  "8",
  "true"
);

anadir_pregunta(
  "Com s'incrementa un std_logic_vector en 1?",
  "V <= std_logic_vector(unsigned(V) + 1);",
  "V <= V + 1;",
  "V <= increment(V);",
  "V <= V++;"
);

anadir_pregunta(
  "Què fa l'operador '&' en VHDL?",
  "Concatenació de vectors o signals",
  "AND lògic",
  "Referència de memòria",
  "Assignació concurrent"
);

// ============== BLOC 15: ERRORS COMUNS ==============

anadir_pregunta(
  "Quin error és MÉS probable si el simulador mostra 'UUUUU' a una sortida?",
  "Signal no inicialitzat o mai assignat",
  "Error de tipus de dades",
  "Valor màxim excedit",
  "Reset activat"
);

anadir_pregunta(
  "Què passa si assignem un valor fora del rang d'un subtype integer?",
  "Error de simulació en temps d'execució (si està habilitat)",
  "Error de compilació sempre",
  "S'ajusta automàticament al rang",
  "Es trunca el valor"
);

anadir_pregunta(
  "Per què NO podem llegir un port 'out' des de dins de l'arquitectura?",
  "Els ports 'out' són només de sortida, no es poden llegir; cal usar un signal intermedi",
  "És una limitació del simulador",
  "Sí que es poden llegir sempre",
  "Només en síntesi"
);

anadir_pregunta(
  "Què passa si un case statement no té 'when others' i no es cobreixen tots els casos?",
  "En síntesi pot inferir un latch; en simulació pot donar error",
  "El compilador afegeix '0' automàticament",
  "No passa res, s'ignora",
  "Error de compilació sempre"
);

// ============== BLOC 16: SÍNTESI AVANÇADA ==============

anadir_pregunta(
  "Què és el 'resource sharing' en síntesi?",
  "Reutilitzar un mateix component hardware (com un sumador) per a diferents operacions",
  "Compartir variables entre processos",
  "Usar la mateixa memòria per diferents signals",
  "Multiplicar recursos per augmentar velocitat"
);

anadir_pregunta(
  "Com podem forçar 'resource sharing' manualment en VHDL?",
  "Usar multiplexors per seleccionar els operands abans de l'operació",
  "Declarar components 'shared'",
  "Usar variables en lloc de signals",
  "No es pot forçar, només el sintetitzador decideix"
);

anadir_pregunta(
  "Per què un loop 'for' es pot sintetitzar en hardware?",
  "Si el rang és estàtic (constant), el sintetitzador 'desenrotlla' el loop creant lògica replicada",
  "Els loops sempre són seqüencials i no es sintetitzen",
  "Només si el rang és inferior a 8",
  "Es converteix en una FSM automàticament"
);

anadir_pregunta(
  "Què implica sintetitzar un 'while' loop?",
  "Normalment NO es pot sintetitzar perquè el nombre d'iteracions pot ser dinàmic",
  "Es sintetitza igual que un 'for' loop",
  "Crea una FSM automàticament",
  "És més eficient que un 'for' loop"
);

// ============== BLOC 17: REGISTRES I OPTIMITZACIÓ ==============

anadir_pregunta(
  "Com evitem que es sintetitzi un flip-flop innecessari per QB quan ja tenim Q?",
  "Assignar QB fora del procés síncron: QB <= not Q;",
  "Declarar QB com a variable",
  "Usar QB <= not Data dins del if rising_edge",
  "No es pot evitar"
);

anadir_pregunta(
  "Què és 'register retiming' en síntesi?",
  "Tècnica d'optimització que mou registres per millorar el timing sense canviar la funcionalitat",
  "Canviar la freqüència del rellotge",
  "Eliminar registres no usats",
  "Duplicar registres per augmentar velocitat"
);

anadir_pregunta(
  "Si un signal s'assigna dins d'un 'if rising_edge(clock)' però mai s'usa, què fa la síntesi?",
  "L'optimitzador normalment elimina el registre per ser redundant",
  "Es sintetitza sempre",
  "Dona error de síntesi",
  "Es converteix en lògica combinacional"
);

// ============== BLOC 18: PACKAGES I LIBRARIES ==============

anadir_pregunta(
  "Quina és la diferència entre 'library' i 'use' en VHDL?",
  "'library' fa visible la biblioteca; 'use' importa paquets específics d'aquesta biblioteca",
  "Són sinònims",
  "'library' és per síntesi, 'use' per simulació",
  "'use' declara la biblioteca, 'library' els paquets"
);

anadir_pregunta(
  "Què conté el package IEEE.numeric_std?",
  "Tipus signed/unsigned i operacions aritmètiques per aquests tipus",
  "Tipus std_logic i std_logic_vector",
  "Funcions de conversió de text",
  "Operacions amb enters"
);

anadir_pregunta(
  "Quin package és necessari per usar 'rising_edge'?",
  "IEEE.std_logic_1164 (defineix std_logic i rising_edge)",
  "IEEE.numeric_std",
  "STD.standard",
  "IEEE.std_logic_arith"
);

anadir_pregunta(
  "Què és la biblioteca 'work'?",
  "La biblioteca de treball actual on es compilen les entitats del projecte",
  "Una biblioteca estàndard de VHDL",
  "La biblioteca del fabricant del FPGA",
  "Una biblioteca temporal del simulador"
);

// ============== BLOC 19: CONVERSIONS DE TIPUS ==============

anadir_pregunta(
  "Com es converteix signed a unsigned?",
  "U <= unsigned(S); (conversió de tipus, reinterpreta els bits)",
  "U <= to_unsigned(S);",
  "U <= signed_to_unsigned(S);",
  "No es pot convertir directament"
);

anadir_pregunta(
  "Quina és la forma correcta de convertir std_logic_vector a integer?",
  "N <= to_integer(unsigned(V)); o to_integer(signed(V));",
  "N <= integer(V);",
  "N <= to_int(V);",
  "N <= V;"
);

anadir_pregunta(
  "Per què no podem fer directament V <= V + 1; si V és std_logic_vector?",
  "std_logic_vector no té definit l'operador '+'; cal convertir a unsigned/signed",
  "Sí que es pot fer",
  "Cal usar la funció increment()",
  "Només es pot amb integers"
);

// ============== BLOC 20: SIMULACIÓ I DEBUG ==============

anadir_pregunta(
  "Què indica un valor 'X' en un signal durant la simulació?",
  "Valor desconegut, possiblement per conflicte de drivers o inicialització incorrecta",
  "Valor en alta impedància",
  "Error de compilació",
  "Senyal no connectat"
);

anadir_pregunta(
  "Com podem escriure missatges al simulador des del codi VHDL?",
  "report 'missatge' severity NOTE/WARNING/ERROR/FAILURE;",
  "print('missatge');",
  "write(output, 'missatge');",
  "log('missatge');"
);