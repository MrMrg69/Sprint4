import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../Styles/ListaJogosFavStyle';
import { Jogo, useJogos } from '../navigation/JogosContext';

const getJogoDescription = (nome: string) => {
  const descriptions: { [key: string]: string } = {
    "Assassin's Creed": "No primeiro jogo da franquia, o jogador encarna Altair Ibn-La'Ahad, um Assassino durante a Terceira Cruzada. A trama aborda a missão de Altair para redimir-se de seus erros e buscar artefatos misteriosos chamados de Pedaços do Éden, enquanto luta contra os Templários e explora a relação entre fé e controle.",
    "Assassin's Creed II": "Assassin's Creed II segue a vida de Ezio Auditore, um jovem nobre que se torna um Assassino após a execução de sua família. A história se passa na Itália renascentista e envolve Ezio buscando justiça e descobrindo os segredos da Irmandade. Ele encontra personagens históricos como Leonardo da Vinci e enfrenta os Templários para proteger a liberdade.",
    "Assassin's Creed: Brotherhood": "Em Brotherhood, Ezio continua sua luta contra os Templários, agora em Roma. Ele lidera a Irmandade e enfrenta a família Borgia, enquanto expande a rede de Assassinos e luta contra a opressão. A história aborda o desenvolvimento de Ezio como líder e mentor.",
    "Assassin's Creed: Revelations": "Ezio viaja para Constantinopla para seguir os passos de Altair e descobrir segredos escondidos pela Irmandade. A história explora o legado de Altair e o papel de Ezio em continuar a missão dos Assassinos. Revelations conclui a trilogia de Ezio, aprofundando-se em temas de sacrifício e legado.",
    "Assassin's Creed: Odyssey": "Em Odyssey, o jogador assume o papel de Alexios ou Kassandra, mercenários espartanos na Grécia Antiga durante a Guerra do Peloponeso. A história explora temas de família, destino e escolhas morais, enquanto os protagonistas buscam seu lugar em um mundo turbulento. Eles enfrentam a Ordem de Cosmos, um precursor dos Templários, e descobrem segredos sobre sua herança ligada à Primeira Civilização. O jogo é marcado por suas escolhas narrativas e seu vasto mundo aberto, repleto de aventuras, combates navais e descobertas em locais históricos como Atenas e Esparta.",
    "Assassin's Creed: Origins": "Situado no Egito Antigo, Origins segue Bayek, um Medjay (guardião do faraó) em sua jornada para vingar a morte de seu filho. O jogo retrata a criação da Irmandade dos Assassinos e o combate contra a Ordem dos Antigos, antecessora dos Templários. Origins oferece uma visão rica e detalhada do Egito, com um mundo vibrante que inclui vastos desertos, cidades monumentais como Alexandria e o funcionamento do sistema político e religioso da época.",
    "Assassin's Creed: Valhalla": "Valhalla coloca o jogador no papel de Eivor, um guerreiro viking que lidera seu clã na colonização da Inglaterra no século IX. O jogo explora as complexidades culturais e políticas da época, com Eivor interagindo com personagens históricos como o rei Alfredo, o Grande. A história também se entrelaça com os Isu, uma raça antiga, conectando-se aos arcos narrativos modernos dos Assassinos e Templários.",
    "Assassin's Creed: Mirage": "Em Mirage, o foco volta às origens da franquia, com uma jogabilidade baseada em stealth e um ambiente focado na Bagdá do século IX. O jogador assume o papel de Basim Ibn Ishaq, um ladrão que se junta à Irmandade dos Assassinos. A narrativa explora sua busca por conhecimento e vingança, em um cenário rico em intrigas e segredos históricos.",
    "Assassin's Creed Chronicles: China": "Chronicles: China acompanha Shao Jun, uma Assassina em busca de vingança contra os Templários na China do século XVI. Inspirada pela técnica de Ezio, ela enfrenta traições e perigos em um jogo com estética artística distinta e mecânicas de stealth.",
    "Assassin's Creed IV: Black Flag": "Em Black Flag, o jogador controla Edward Kenway, um pirata e Assassino que explora o Caribe no auge da era dourada da pirataria. O jogo combina combates navais e terrestres, enquanto Edward descobre segredos da Irmandade e enfrenta perigos no mar.",
    "Assassin's Creed: Freedom Cry": "Este DLC de Black Flag segue Adewale, um ex-escravo e agora Assassino, que luta contra a escravidão no Caribe. A história aborda a luta de Adewale para libertar outros escravos e desafiar o sistema opressor.",
    "Assassin's Creed: Rogue": "Rogue conta a história de Shay Cormac, um Assassino que se torna Templário após perder a fé na Irmandade. Ambientado durante a Guerra dos Sete Anos, o jogo explora a moralidade complexa dos Assassinos e Templários.",
    "Assassin's Creed III: Liberation": "Em Liberation, o jogador controla Aveline de Grandpré, a primeira protagonista feminina da franquia, em sua luta pela liberdade em Nova Orleans. A história explora questões de identidade, escravidão e resistência.",
    "Assassin's Creed III": "Connor Kenway, um meio-inglês e meio-nativo americano, luta pela liberdade durante a Revolução Americana. O jogo aborda sua jornada pessoal e o impacto do conflito entre Assassinos e Templários na construção da nação.",
    "Assassin's Creed: Unity": "Situado durante a Revolução Francesa, Unity segue Arno Dorian em sua busca por vingança e redenção. A trama explora a luta por justiça e o papel dos Assassinos em um momento de grandes mudanças sociais e políticas.",
    "Assassin's Creed Chronicles: India": "Chronicles: India se passa na Índia colonial durante o conflito Sikh. O jogador assume o papel de Arbaaz Mir, que enfrenta intrigas e traições em uma narrativa de espionagem e lealdade.",
    "Assassin's Creed: Syndicate": "Em Londres, durante a Revolução Industrial, os irmãos Jacob e Evie Frye lutam contra a opressão dos Templários e defendem a classe trabalhadora. O jogo aborda as questões de exploração e a busca por justiça social.",
    "Assassin's Creed Chronicles: Russia": "No último título da série Chronicles, Nikolai Orelov enfrenta conflitos políticos na Rússia revolucionária de 1918. Ele tenta proteger uma jovem Romanov e enfrenta dilemas morais enquanto se infiltra em bases inimigas.",
    
    "Amnesia: The Dark Descent": "Em Amnesia: The Dark Descent, o jogador controla Daniel, um homem que acorda sem memória em um castelo sombrio e assustador chamado Brennenburg. À medida que explora o local, Daniel descobre que ele próprio fez escolhas terríveis para escapar de uma entidade chamada 'Sombra', que o persegue por ter encontrado um artefato misterioso no passado. Durante o jogo, ele enfrenta horrores indescritíveis e descobre que sua amnésia foi auto-induzida para lidar com a culpa de atos horríveis que cometeu. Este jogo é notável por sua atmosfera opressiva, ausência de combate e o uso de luz e escuridão como mecânicas essenciais de sobrevivência.",
    "Amnesia: A Machine for Pigs": "Em Amnesia: A Machine for Pigs, o jogador assume o papel de Oswald Mandus, um industrial britânico que desperta de uma febre terrível e encontra sua casa aparentemente abandonada. Ele logo descobre uma 'máquina' gigantesca e horrenda de sua própria criação, destinada a transformar humanos em carne e combustível. O jogo explora temas de insanidade, arrependimento e moralidade, enquanto Mandus desce aos recônditos de sua própria mente e da gigantesca máquina subterrânea que ele criou. Esta sequência possui um tom mais introspectivo e sombrio, com uma narrativa profunda que questiona a ética e a loucura da revolução industrial.",
    "Amnesia: Rebirth": "Amnesia: Rebirth segue Tasi Trianon, uma exploradora que se encontra perdida no deserto argelino após um acidente de avião. Ao longo do jogo, Tasi luta contra os horrores sobrenaturais e tenta recuperar suas memórias fragmentadas enquanto enfrenta terrores tanto do mundo físico quanto de um reino paralelo. A história explora temas de maternidade, perda e sacrifício, com Tasi buscando desesperadamente encontrar seu filho enquanto enfrenta as consequências dos experimentos científicos feitos com um artefato antigo. Este jogo é conhecido por expandir o universo de Amnesia com um enredo emocional e intenso.",
    "Amnesia: The Bunker": "Em Amnesia: The Bunker, o jogador se encontra em um bunker da Primeira Guerra Mundial, onde monstros aterrorizantes espreitam nos corredores sombrios. Diferente dos outros jogos da série, o jogador tem um controle limitado de armas, aumentando a tensão de cada encontro. Com recursos escassos, o jogador precisa resolver quebra-cabeças e sobreviver aos terrores que espreitam no bunker. A ambientação claustrofóbica e o design de som criam uma experiência de horror angustiante e desafiadora, marcando um retorno à essência de Amnesia com um toque de inovação​.",
    
    "BioShock 1": "Em 1960, o protagonista Jack sobrevive a um acidente de avião e encontra uma misteriosa cidade submersa chamada Rapture. Construída por Andrew Ryan, a cidade deveria ser uma utopia libertária para a elite, mas acabou se tornando uma distopia devido ao uso excessivo de ADAM, uma substância que concede poderes sobre-humanos, mas que também leva os habitantes à loucura. Conforme Jack explora Rapture, ele é guiado por Atlas, que o instrui a lutar contra os cidadãos mutantes e os guardiões conhecidos como 'Big Daddies'. O jogo apresenta uma trama surpreendente envolvendo controle mental, segredos familiares e escolhas morais que impactam o destino das 'Little Sisters', jovens vítimas do sistema.",
    "BioShock 2": "Nesta sequência, o jogador controla um dos primeiros 'Big Daddies' chamado Subject Delta, que desperta oito anos após os eventos do primeiro jogo. Em busca de sua 'Little Sister' chamada Eleanor, Delta enfrenta Sofia Lamb, uma psicóloga que lidera um culto em Rapture. A filosofia de Lamb contrasta com a de Andrew Ryan, pois ela acredita em um coletivo onde todos devem se sacrificar pelo bem comum. Delta enfrenta desafios emocionais e morais enquanto tenta resgatar Eleanor e descobrir mais sobre o que restou de Rapture. O jogo aprofunda a relação entre os 'Big Daddies' e as 'Little Sisters', proporcionando um olhar emocional e sombrio sobre o que restou da cidade.",
    "BioShock Infinite": "Ao contrário dos jogos anteriores, BioShock Infinite se passa na cidade flutuante de Columbia em 1912. O protagonista, Booker DeWitt, é um detetive contratado para resgatar Elizabeth, uma jovem misteriosa com poderes especiais de manipular o espaço e o tempo. Columbia, liderada por Zachary Comstock, é um lugar dominado por ideais ultranacionalistas e racistas. Conforme Booker e Elizabeth tentam escapar da cidade, eles descobrem segredos sombrios sobre o passado de Booker e a verdadeira natureza de Columbia. O jogo explora temas complexos de realidades alternativas, arrependimento e identidade, enquanto Booker e Elizabeth enfrentam ameaças em um ambiente deslumbrante e sinistro​.",
  };

  return descriptions[nome] || null;
};

const ListaJogosFav = () => {
  const { jogos, toggleFavorito } = useJogos();
  const jogosFavoritos = jogos.filter((jogo) => jogo.favorito);

  return (
    <View style={styles.container}>
      {jogosFavoritos.length > 0 ? (
        <FlatList
          data={jogosFavoritos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.item}>{item.nome}</Text>
                <TouchableOpacity onPress={() => toggleFavorito(item.id)}>
                  <Icon
                    name={item.favorito ? 'star' : 'star-border'}
                    size={24}
                    color={item.favorito ? '#FFD700' : '#FFF'}
                    style={{ marginHorizontal: 5 }}
                  />
                </TouchableOpacity>
              </View>
              {getJogoDescription(item.nome) && (
                <View style={styles.descriptionContainer}>
                  <Text style={styles.descriptionText}>{getJogoDescription(item.nome)}</Text>
                </View>
              )}
              <View style={styles.divider} />
            </View>
          )}
        />
      ) : (
        <Text style={styles.item}>Nenhum jogo favoritado</Text>
      )}
    </View>
  );
};

export default ListaJogosFav;
