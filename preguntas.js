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


// ============================================
// PREGUNTES SOBRE TIMING I DELTA DELAYS
// ============================================

anadir_pregunta(
    "En un procés combinacional, tenim: B <= A; C <= B; D <= C; Si A canvia a temps T, en quin temps absolut es veurà reflectit el canvi a D?",
    "T + 3 deltas",
    "T + 1 delta",
    "T + 0 deltas (instantani)",
    "T + 2 deltas"
);

anadir_pregunta(
    "Donat: process(clk) begin if rising_edge(clk) then X <= A; Y <= X; end if; end process; Si A='1' i X='0' abans del rising edge, què passa IMMEDIATAMENT després del rising edge?",
    "X s'assigna '1' però Y encara s'assigna '0' (el valor antic de X)",
    "X i Y s'assignen '1' simultàniament",
    "Y s'assigna '1' primer, després X",
    "Dona error de compilació per dependència circular"
);

anadir_pregunta(
    "Quin és el problema principal d'aquest codi: signal S: std_logic; ... process(clk) variable V: std_logic; begin if rising_edge(clk) then V := A; S <= V; output <= V; end if; end process;",
    "Output llegeix el valor NOU de V (assignació immediata), però S llegeix el valor ANTIC",
    "V no es pot usar fora del procés",
    "Output no pot llegir una variable",
    "S i output tindran sempre el mateix valor"
);

// ============================================
// PREGUNTES SOBRE SÍNTESI COMPLEXA
// ============================================

anadir_pregunta(
    "Si tenim: signal Count: integer range 0 to 1023; Quants flip-flops es sintetitzaran?",
    "10 flip-flops (log2(1024) = 10 bits necessaris)",
    "32 flip-flops (mida d'integer)",
    "1024 flip-flops (un per cada valor)",
    "11 flip-flops (per representar fins a 1023)"
);

anadir_pregunta(
    "Quin és el problema de síntesi en: process(clk) variable temp: signed(7 downto 0); begin if rising_edge(clk) then temp := A + B; temp := temp * 2; Q <= temp; end if; end process;",
    "Es sintetitzarà: sumador -> multiplicador -> registre Q (NO es crea registre per temp perquè és variable)",
    "Es creen 3 registres: un per A+B, un per temp*2, i un per Q",
    "Es crea un bucle combinacional",
    "temp requereix 16 bits per la multiplicació"
);

anadir_pregunta(
    "En una FSM Moore, on s'assignen les sortides i on els següents estats?",
    "Sortides s'assignen segons l'ESTAT ACTUAL, següent estat segons ESTAT ACTUAL + ENTRADES",
    "Sortides segons ESTAT ACTUAL + ENTRADES, següent estat segons ESTAT ACTUAL",
    "Tant sortides com següent estat segons ESTAT ACTUAL + ENTRADES",
    "Sortides segons SEGÜENT ESTAT, següent estat segons ESTAT ACTUAL"
);

anadir_pregunta(
    "Quina diferència CRÍTICA hi ha entre: F <= A when SEL='1' else B; i process(SEL,A,B) begin if SEL='1' then F<=A; else F<=B; end if; end process;",
    "Cap diferència funcional: tots dos sintetitzen el mateix multiplexor",
    "El primer és combinacional, el segon requereix un sensitivity list complet",
    "El concurrent statement és més ràpid",
    "El procés crea un latch si falta else"
);

// ============================================
// PREGUNTES SOBRE CONVERSIONS I TIPUS
// ============================================

anadir_pregunta(
    "Quin és l'error en: signal V: std_logic_vector(7 downto 0); signal N: integer; ... N <= to_integer(V);",
    "to_integer() només accepta signed o unsigned, NO std_logic_vector directament",
    "N ha de ser natural, no integer",
    "V ha de ser (0 to 7), no (7 downto 0)",
    "Falta especificar el nombre de bits"
);

anadir_pregunta(
    "Si fem: A <= resize(signed('1001'), 8); quin valor tindrà A?",
    "11111001 (extensió de signe: el bit més significatiu '1' s'estén)",
    "00001001 (extensió amb zeros)",
    "10010000 (desplaçament a l'esquerra)",
    "Error: '1001' és std_logic_vector, no signed"
);

anadir_pregunta(
    "Donat: type ROM_TYPE is array(0 to 7) of std_logic_vector(3 downto 0); constant ROM: ROM_TYPE := (others => '1111'); Quin valor tindrà ROM(3)?",
    "Error de compilació: others requereix std_logic_vector complet com '1111'",
    "1111",
    "0011",
    "UUUU"
);

anadir_pregunta(
    "En l'operació: S <= A sra 2; on A és signed(7 downto 0) := '10110011', quin serà el valor de S?",
    "11101100 (shift arithmetic right: manté el signe, duplica el bit més significatiu)",
    "00101100 (shift amb zeros)",
    "11001110 (rotació)",
    "00110011 (divisió per 4)"
);

// ============================================
// PREGUNTES SOBRE PROCESSOS I SENSIBILITAT
// ============================================

anadir_pregunta(
    "Quin problema té aquest procés per síntesi: process(A, B) variable sum: integer; begin sum := 0; for i in 0 to A loop sum := sum + B; end loop; Q <= sum; end process;",
    "El rang del loop depèn d'una entrada (A), per tant NO és sintetitzable (rang ha de ser estàtic)",
    "Les variables no es poden usar en loops",
    "Falta Clock en el sensitivity list",
    "sum ha de ser signal, no variable"
);

anadir_pregunta(
    "Si un procés té sensitivity list (A, B) però usa també el senyal C, què passa?",
    "En simulació pot no actualitzar-se quan C canvia; en síntesi es genera warning i s'infereix C automàticament",
    "Error de compilació",
    "C s'ignora completament",
    "El procés s'executa sempre que A o B canvien"
);

anadir_pregunta(
    "Diferència entre: process begin wait until rising_edge(Clk); Q <= D; end process; i process(Clk) begin if rising_edge(Clk) then Q <= D; end if; end process;",
    "Cap diferència funcional: tots dos creen un flip-flop D sincrònic",
    "El primer crea un latch, el segon un flip-flop",
    "El primer no és sintetitzable",
    "El segon és més ràpid"
);

// ============================================
// PREGUNTES SOBRE CONFIGURACIÓ I JERARQUIA
// ============================================

anadir_pregunta(
    "En una configuració, què fa: for all: Component1 use entity work.Entity1(RTL);",
    "Associa TOTES les instàncies del component Component1 amb l'arquitectura RTL de Entity1",
    "Associa només la primera instància",
    "Crea un alias entre Component1 i Entity1",
    "Error: 'all' no és una paraula reservada vàlida"
);

anadir_pregunta(
    "Si tenim default binding i l'entity té 2 arquitectures (V1 analitzada primer, V2 després), quina s'usa?",
    "Depèn de l'eina: algunes usen l'última (V2), altres la primera (V1) - comportament NO estandarditzat",
    "Sempre la primera (V1)",
    "Sempre l'última (V2)",
    "Error de compilació per ambigüitat"
);

anadir_pregunta(
    "Quina biblioteca NO cal declarar explícitament perquè és implícita?",
    "STD.STANDARD i WORK són sempre visibles implícitament",
    "IEEE.std_logic_1164",
    "IEEE.numeric_std",
    "Totes les biblioteques han de ser declarades"
);

// ============================================
// PREGUNTES SOBRE MEMÒRIES I ARRAYS
// ============================================

anadir_pregunta(
    "Per sintetitzar una ROM en una FPGA, quina estructura VHDL és correcta?",
    "type ROM_TYPE is array(...) of std_logic_vector; constant ROM: ROM_TYPE := (...); Data <= ROM(Address);",
    "type ROM_TYPE is array(...) of std_logic_vector; signal ROM: ROM_TYPE := (...);",
    "Les ROMs no es poden sintetitzar, només RAMs",
    "S'ha d'usar sempre un process amb clock"
);

anadir_pregunta(
    "Quin problema té: type RAM_TYPE is array(0 to 255) of std_logic_vector(7 downto 0); signal RAM: RAM_TYPE; ... RAM(Address) <= Data; per síntesi?",
    "Falta un process amb clock: assignacions a RAM han de ser síncrones per inferir block RAM",
    "El rang ha de ser 'downto', no 'to'",
    "Address ha de ser integer, no std_logic_vector",
    "No hi ha cap problema"
);

anadir_pregunta(
    "Si volem una RAM amb lectura asíncrona i escriptura síncrona, quin codi és correcte?",
    "process(clk) begin if rising_edge(clk) then if WE='1' then RAM(WR_ADDR) <= DATA; end if; end if; end process; RD_DATA <= RAM(RD_ADDR);",
    "process(clk) begin if rising_edge(clk) then RAM(WR_ADDR) <= DATA; RD_DATA <= RAM(RD_ADDR); end if; end process;",
    "RAM(WR_ADDR) <= DATA; RD_DATA <= RAM(RD_ADDR);",
    "No es pot fer: lectura i escriptura han de ser ambdues síncrones"
);

// ============================================
// PREGUNTES SOBRE FSM I ESTATS
// ============================================

anadir_pregunta(
    "Si una FSM té type State is (S0,S1,S2); i usem codificació binària, quantes possibles combinacions de flip-flops NO corresponen a cap estat?",
    "1 combinació (11) queda sense usar amb 3 estats i 2 flip-flops",
    "0 combinacions",
    "2 combinacions",
    "Depèn de la codificació que triï el sintetitzador"
);

anadir_pregunta(
    "En una FSM amb single process, on s'han d'assignar les sortides per evitar latches?",
    "S'han d'assignar dins de CADA branca del case (o tenir valor per defecte abans del case)",
    "Només en el reset asíncron",
    "Després del case statement",
    "Les sortides sempre es registren automàticament"
);

anadir_pregunta(
    "Quina és la diferència entre: next_state <= S1; (dins d'un process combinacional) i State <= S1; (dins d'un process amb clock)?",
    "next_state es calcula combinacionalment, State actualitza síncronament amb el clock",
    "Cap diferència",
    "next_state és més ràpid",
    "State requereix reset, next_state no"
);

// ============================================
// PREGUNTES SOBRE GENERIC I GENERATE
// ============================================

anadir_pregunta(
    "Si tenim: generic(N: positive := 8); i després: signal Data: std_logic_vector(N downto 0); Quants bits té Data?",
    "N+1 bits (per exemple, si N=8, va de 8 downto 0, que són 9 bits)",
    "N bits",
    "Error: ha de ser N-1 downto 0",
    "Depèn del valor per defecte"
);

anadir_pregunta(
    "En un generate statement, el label és obligatori?",
    "SÍ, el label és obligatori per poder referenciar les instàncies generades",
    "NO, és opcional",
    "Només per 'for generate', no per 'if generate'",
    "Només en síntesi, en simulació és opcional"
);

anadir_pregunta(
    "Quin problema té: G: for i in A'range generate ... port map(Din(i), Dout(i+1)); ... end generate; si A és (7 downto 0)?",
    "Quan i=0, Dout(i+1)=Dout(1) està OK, però la lògica pot ser incorrecta si esperem Dout(0)",
    "i+1 dona error perquè i és el nombre d'iteració",
    "Error: no es pot fer aritmètica amb l'índex del generate",
    "Cap problema"
);

// ============================================
// PREGUNTES SOBRE TIMING AVANÇAT
// ============================================

anadir_pregunta(
    "Si tenim setup time = 2ns, clock period = 10ns, i el retard de la lògica combinacional és 7ns, es compleix el timing?",
    "NO: retard_logic (7ns) < period (10ns) - setup (2ns) = 8ns, però 7 < 8 SÍ es compleix. Resposta correcta: SÍ es compleix",
    "NO, perquè 7+2=9ns < 10ns",
    "SÍ, perquè 7ns < 10ns",
    "Depèn del hold time"
);

anadir_pregunta(
    "Què és el 'hold time' i quan és crític?",
    "Temps mínim que les dades han de mantenir-se estables DESPRÉS del clock edge; crític amb retards molt curts",
    "Temps abans del clock edge",
    "Temps entre dos flancs de rellotge",
    "Temps de propagació del flip-flop"
);

anadir_pregunta(
    "Si el 'clock-to-output delay' d'un FF és 0.5ns, i la lògica combinacional té retard 3ns, quin és el retard total fins al següent FF?",
    "3.5ns (clock-to-Q + retard_logic)",
    "3ns (només la lògica)",
    "0.5ns (només el FF)",
    "Depèn del setup time del següent FF"
);

// ============================================
// PREGUNTES SOBRE CODI REAL D'EXAMEN
// ============================================

anadir_pregunta(
    "En CODI 3 de l'examen 08/01/2025, el procés p2 implementa:",
    "Un registre de desplaçament a ESQUERRA (outPar_local(i) <= outPar_local(i-1) desplaça cap amunt els índexs)",
    "Un registre de desplaçament a dreta",
    "Un contador de 8 bits",
    "Una memòria de 8 posicions"
);

anadir_pregunta(
    "En el mateix CODI 3, quan 'ready' val '1', significa que:",
    "El comptador 'count' ha arribat a '111' (7 en decimal), indicant que s'han processat 8 bits",
    "S'ha rebut un bit d'inici",
    "outPar conté dades vàlides des del primer clock",
    "start està actiu"
);

anadir_pregunta(
    "En CODI 4 dels exàmens (FSM), per passar de 'disp_time' a 'wall_climb', quina seqüència mínima cal?",
    "mode_set (2 vegades) per arribar a 'sports', després enter per 'mtb', després up/down fins 'wall_climb'",
    "mode_set + enter + up",
    "Només mode_set múltiples vegades",
    "back + mode_set + enter"
);

anadir_pregunta(
    "En CODI 1 de l'examen 27/01/2025, l'operació 'inter1 rol to_integer(unsigned(inter2))' fa:",
    "Rotació a L'ESQUERRA de inter1 tantes posicions com indica el valor de inter2",
    "Rotació a la dreta",
    "Shift lògic",
    "Error: rol no existeix en VHDL"
);

// ============================================
// PREGUNTES SOBRE TESTBENCHES
// ============================================

anadir_pregunta(
    "En un testbench, per generar un rellotge que s'aturi després de cert temps, quin patró és correcte?",
    "while NOW < STOP_TIME loop Clock<='0'; wait for 5ns; Clock<='1'; wait for 5ns; end loop; wait;",
    "loop Clock<='0'; wait for 5ns; Clock<='1'; wait for 5ns; end loop;",
    "process begin Clock<='0'; wait for 5ns; Clock<='1'; wait for 5ns; end process;",
    "Clock <= not Clock after 5ns;"
);

anadir_pregunta(
    "Si volem comprovar valors en instants precisos amb 'wait until rising_edge(Clk); wait for DELTA;', per què fem servir el delta delay?",
    "Per esperar que tots els senyals s'estabilitzin després del flanc (deixar passar deltas de propagació)",
    "Per fer el testbench més lent",
    "És un error: no cal esperar després del rising_edge",
    "Per sincronitzar amb altres processos"
);

anadir_pregunta(
    "Quina diferència hi ha entre usar 'assert' amb severity ERROR vs FAILURE?",
    "ERROR continua la simulació, FAILURE atura la simulació",
    "ERROR és més greu que FAILURE",
    "Cap diferència pràctica",
    "ERROR només mostra un missatge, FAILURE genera excepció"
);

// ============================================
// PREGUNTES SOBRE SÍNTESI AVANÇADA
// ============================================

anadir_pregunta(
    "Per què aquest codi NO implica un latch: process(En,D) begin Q<='0'; if En='1' then Q<=D; end if; end process;?",
    "Perquè hi ha assignació per DEFECTE (Q<='0') abans del if, garantint valor en tots els casos",
    "Perquè hi ha sensitivity list completa",
    "Perquè En és una entrada",
    "SÍ que implica un latch"
);

anadir_pregunta(
    "Si tenim: signal S: signed(3 downto 0); signal U: unsigned(3 downto 0); i fem U <= unsigned(S); què passa si S='1111' (que és -1 en complement a 2)?",
    "U rebrà '1111' que s'interpreta com 15 en unsigned (reinterpretació de bits, NO conversió de valor)",
    "U rebrà '0001'",
    "Error de compilació",
    "U rebrà el valor absolut de S"
);

anadir_pregunta(
    "En síntesi, per compartir recursos (resource sharing), quina estructura és més efectiva?",
    "Usar un multiplexor abans de l'operació: L<=A when Sel else C; R<=B when Sel else D; Z<=L+R;",
    "Duplicar l'operació: if Sel then Z<=A+B; else Z<=C+D;",
    "Usar variables en lloc de signals",
    "Són equivalents"
);

// ============================================
// PREGUNTES SOBRE OPERADORS I EXPRESSIONS
// ============================================

anadir_pregunta(
    "Quina diferència hi ha entre: F <= A & B & C; (3 vectors de 4 bits) i F <= (A, B, C);?",
    "Cap diferència: ambdues són concatenació, el resultat és un vector de 12 bits",
    "La primera és concatenació, la segona és agregat (array)",
    "La segona dona error",
    "La primera és més eficient"
);

anadir_pregunta(
    "Si fem: V <= V(6 downto 0) & '0'; on V és std_logic_vector(7 downto 0), quina operació realitzem?",
    "Shift lògic a L'ESQUERRA: el bit 7 es perd, el bit 0 es posa a '0', i tots els altres es desplacen",
    "Shift a la dreta",
    "Rotació",
    "Error: índexs incorrectes"
);

anadir_pregunta(
    "Donada l'expressió: F <= '1' when A='1' and B='0' else '0' when A='0' else 'X'; Si A='1' i B='1', quin valor té F?",
    "'X' (no compleix primera condició A='1'andB='0', no compleix segona A='0', per tant es fa l'últim else)",
    "'1'",
    "'0'",
    "Error: expressió ambigua"
);

// ============================================
// PREGUNTES SOBRE BIBLIOTEQUES I PACKAGES
// ============================================

anadir_pregunta(
    "Quina diferència hi ha entre: use IEEE.std_logic_1164.all; i use IEEE.std_logic_1164.std_logic;?",
    "La primera importa TOT el package, la segona només el tipus std_logic",
    "Cap diferència",
    "La segona dona error de sintaxi",
    "La primera és obsoleta"
);

anadir_pregunta(
    "Si volem usar operacions aritmètiques amb std_logic_vector, quins packages necessitem?",
    "IEEE.numeric_std (per conversions i operadors amb unsigned/signed)",
    "Només IEEE.std_logic_1164",
    "IEEE.std_logic_arith (estàndard)",
    "STD.standard.all"
);

anadir_pregunta(
    "Per què NO és recomanable usar: library IEEE; use IEEE.std_logic_arith.all; use IEEE.std_logic_unsigned.all;?",
    "Són packages NO estàndard (de Synopsys), millor usar IEEE.numeric_std que és estàndard",
    "Donen errors de compilació",
    "Són massa lents",
    "No permeten síntesi"
);

// ============================================
// PREGUNTES SOBRE ERRORS COMUNS
// ============================================

anadir_pregunta(
    "Per què aquest codi dona comportament imprevisible: process(clk) begin Q1<=D1; if rising_edge(clk) then Q2<=D2; end if; end process;?",
    "Q1 s'assigna combinacionalment (fora del if rising_edge), Q2 síncronament → inconsistència",
    "Falta reset",
    "Q1 i Q2 han de ser del mateix tipus",
    "No hi ha problema"
);

anadir_pregunta(
    "Si oblidem posar un senyal en el sensitivity list d'un procés combinacional, què passa?",
    "En simulació pot no actualitzar-se correctament; en síntesi normalment funciona perquè l'eina infere la dependència",
    "Error de compilació",
    "Funciona igual",
    "Es crea un latch"
);

anadir_pregunta(
    "Per què aquest codi pot donar problemes: signal Clk: std_logic := '0'; Clk <= not Clk after 10ns;?",
    "Funciona en simulació però NO és sintetitzable (no hi ha 'after' en hardware)",
    "Error de compilació",
    "És la manera correcta de generar un rellotge",
    "Clk ha de ser variable"
);

// ============================================
// PREGUNTES MÉS ESPECÍFIQUES D'EXAMEN
// ============================================

anadir_pregunta(
    "En el disseny 'thing' del CODI 3 (27/01/2025), per què 'ready' depèn també de 'clock'?",
    "Per assegurar que ready només és '1' durant el flanc HIGH del clock quan count='111'",
    "És un error de disseny",
    "Per fer-ho síncrон",
    "Per evitar glitches"
);

anadir_pregunta(
    "En CODI 2 (27/01/2025), l'entitat 'dmx' amb case sel implementa:",
    "Un demultiplexor (envia in1 a una de les 4 sortides segons sel)",
    "Un multiplexor",
    "Un descodificador",
    "Un registre de desplaçament"
);

anadir_pregunta(
    "En el testbench de CODI 4, per què s'usa 'while Now < 120 ns' en el process del rellotge?",
    "Per limitar la generació del clock a un temps màxim de simulació",
    "És obligatori en tots els testbenches",
    "Per sincronitzar amb altres processos",
    "És equivalent a 'loop' infinit"
);

// ============================================
// PREGUNTES SOBRE ATRIBUTS
// ============================================

anadir_pregunta(
    "Si A és std_logic_vector(5 downto 2), quin valor té A'length?",
    "4 (nombre d'elements: 5,4,3,2)",
    "5",
    "3",
    "Error: índexs invalids"
);

anadir_pregunta(
    "Donada: type State is (Idle, Run, Stop); signal S: State; Quin valor té State'left?",
    "Idle (el primer valor enumerat)",
    "Run",
    "Stop",
    "Error: 'left' només per arrays"
);

anadir_pregunta(
    "Si fem: for i in A'reverse_range loop on A és (7 downto 0), en quin ordre es recorre?",
    "De 0 a 7 (inverteix el 7 downto 0)",
    "De 7 a 0",
    "Error de sintaxi",
    "Igual que A'range"
);

// ============================================
// PREGUNTES SOBRE OPTIMITZACIÓ
// ============================================

anadir_pregunta(
    "Per evitar crear un segon flip-flop innecessari en: process(clk) begin if rising_edge(clk) then Q<=Data; QB<=not Data; end if; end process;, com ho fem?",
    "Treure QB del process: process(clk) begin if rising_edge(clk) then Q<=Data; end if; end process; QB <= not Q;",
    "Usar variable per QB",
    "Posar QB en un altre process",
    "No es pot evitar"
);

anadir_pregunta(
    "Què fa l'optimització 'register retiming'?",
    "Mou registres a través de la lògica combinacional per equilibrar els retards dels camins sense canviar funcionalitat",
    "Elimina registres no usats",
    "Duplica registres per redundància",
    "Canvia la freqüència de rellotge"
);

anadir_pregunta(
    "Per resource sharing manual en: Z <= A+B when K='1' else C+D;, quantes unitats d'addició es poden inferir?",
    "Depèn del sintetitzador: pot usar 2 sumadors o compartir 1 sumador amb un multiplexor",
    "Sempre 2 sumadors",
    "Sempre 1 sumador",
    "Error: no es pot sintetitzar"
);

// ============================================
// PREGUNTES SOBRE ESPECIFICITATS
// ============================================

anadir_pregunta(
    "Quan usem 'open' en un port map, significa:",
    "Eixe port queda desconnectat (per sortides que no necessitem)",
    "El port s'obre per lectura",
    "Error de sintaxi",
    "El port s'inicialitza amb el valor per defecte"
);

anadir_pregunta(
    "Si una entitat té: port(Clk: in std_logic; Reset: in std_logic := '0'; ...), què significa?",
    "Reset té valor per defecte '0' si no es connecta en el port map",
    "Reset sempre val '0'",
    "Error: els ports no poden tenir valors per defecte",
    "Reset és opcional en el port map"
);

anadir_pregunta(
    "En un component, què és millor: positional association o named association en port map?",
    "Named association és més clara i menys propensa a errors (especialment amb molts ports)",
    "Positional és sempre millor",
    "Són exactament iguals",
    "Positional és més ràpida en simulació"
);

// ============================================
// ÚLTIMES PREGUNTES MÉS COMPLICADES
// ============================================

anadir_pregunta(
    "Si tenim 3 processos que assignen al mateix senyal S en diferents moments, qui 'guanya'?",
    "El darrer driver que assigna un valor diferent de 'Z' (o segons la funció de resolució si és std_logic)",
    "El primer procés",
    "Error: múltiples drivers no permesos",
    "El procés amb prioritat més alta"
);

anadir_pregunta(
    "Per implementar una sortida tristate en VHDL: Output <= Data when Enable='1' else 'Z';, què passa si múltiples drivers posen 'Z'?",
    "El bus queda en alta impedància ('Z'), un altre driver pot prendre el control",
    "Error de curtcircuit",
    "El primer driver controla",
    "'Z' es converteix en 'X'"
);

anadir_pregunta(
    "En TextIO, per què usem 'variable' i no 'signal' per la variable 'L: line'?",
    "Perquè les operacions de lectura/escriptura (readline, write) requereixen paràmetres variable per canviar-los immediatament",
    "És una convenció, també funciona amb signal",
    "line és un tipus especial que només pot ser variable",
    "Per eficiència de simulació"
);

anadir_pregunta(
    "Si volem inicialitzar una RAM llegint d'un fitxer en síntesi (no simulació), quin mètode és correcte?",
    "Usar una funció InitRAM que llegeix el fitxer i retorna la constant/array inicialitzat (síntesi interpreta el contingut)",
    "Usar TextIO en un process",
    "Les RAMs no es poden inicialitzar en síntesi",
);


anadir_pregunta(
"Si fem: type Matrix is array(0 to 3, 0 to 3) of integer; signal M: Matrix; Com accedim a l'element de fila 2, columna 3?",
"M(2, 3)",
"M(2)(3)",
"M[2][3]",
"Error: arrays multidimensionals no suportats"
);
anadir_pregunta(
"En una configuració amb 'for all: MUX use entity work.MUX2(RTL);', si després afegim una nova instància de MUX, què passa?",
"La nova instància també usa automàticament work.MUX2(RTL) per 'all'",
"Error: cal recompilar la configuració",
"La nova instància usa default binding",
"Cal afegir-la manualment a la configuració"
);
anadir_pregunta(
"Per què en: F <= resize(A, 8) + resize(B, 8); només cal fer resize d'UN operand si F és de 8 bits?",
"L'operador '+' retorna el mateix nombre de bits que el operand MÉS AMPLE, per tant n'hi ha prou amb un resize",
"És incorrecte: cal resize dels dos",
"És una optimització del compilador",
"Depèn si A i B són signed o unsigned"
);
anadir_pregunta(
"Si tenim: signal V: std_logic_vector(3 downto 0); i fem V(5) <= '1';, què passa?",
"Error en simulació (índex fora de rang), però pot compilar",
"V s'expandeix automàticament",
"Error de compilació",
"V(5) s'ignora"
);
anadir_pregunta(
"En una FSM single-process, per què pot ser problemàtic llegir el valor de 'State' dins del mateix procés on s'actualitza?",
"No és problemàtic si s'entén que es llegeix el valor ACTUAL (pre-clock), no el següent",
"Sempre dona error",
"Crea un latch",
"No es pot fer"
);
anadir_pregunta(
"Per tenir un comptador de 0 a 999 amb el mínim de bits, quin tipus hauríem d'usar?",
"integer range 0 to 999 (infereix 10 bits: 2^10=1024 > 999)",
"integer (32 bits)",
"std_logic_vector(9 downto 0)",
"unsigned(10 downto 0)"
);
