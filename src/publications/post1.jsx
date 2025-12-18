import "./post.css"
const PostOne = () => {
  return (
    <>
      <header>
        <h1>🌿 Tesouros Escondidos de Três Braços 🌿</h1>
        <p>Aventura e Natureza Exuberante</p>
      </header>

      <div className="container">
        <section className="intro">
          <p>
            Embarque conosco em uma jornada pelas maravilhas naturais de Três Braços, onde a
            história e a aventura se encontram em paisagens de tirar o fôlego. Este guia convida
            você a explorar destinos singulares que prometem experiências inesquecíveis. Prepare-se
            para desvendar os segredos e a beleza intocada que aguardam por você.
          </p>
        </section>

        {/* Cachoeira do Inferno */}
        <section className="cachoeira-section">
          <h2>Cachoeira do Inferno: Onde a História Encontra a Natureza Selvagem</h2>

          <div className="video-container">
            <video autoPlay loop muted playsInline>
              <source src="./imagens/inferno-video.mp4" type="video/mp4" />
              Seu navegador não suporta vídeos HTML5.
            </video>
          </div>

          <p>
            A Cachoeira do Inferno, um nome que ressoa com mistério e grandiosidade, é muito
            mais do que um espetáculo natural; é um marco histórico da região de Três Braços.
            Antigamente, suas poderosas águas eram a força motriz de uma hidrelétrica,
            desempenhando um papel crucial no fornecimento de energia para comunidades
            vizinhas como Cravolândia e Santa Inês, e até mesmo iluminando as casas de Três
            Braços. Essa herança de vitalidade e progresso confere à cachoeira uma aura de
            respeito e admiração, lembrando-nos da capacidade da natureza de moldar o
            desenvolvimento humano.
          </p>

          <p>
            Hoje, a Cachoeira do Inferno é um convite irrecusável para os amantes da fotografia e
            da pesca. Suas paisagens são um verdadeiro deleite para os olhos, com quedas d'água
            que desenham cenários perfeitos para capturar momentos inesquecíveis e recantos
            serenos ideais para a prática da pesca, onde a tranquilidade é a companhia perfeita.
          </p>

          <p>
            Para os mais aventureiros e com experiência em natação, as profundezas da cachoeira
            oferecem um desafio revigorante. É um local que exige respeito e habilidade,
            prometendo uma experiência única para aqueles que se sentem à vontade em águas
            profundas. A correnteza, embora poderosa, é parte da majestade do local, lembrando-
            nos da força indomável da natureza.
          </p>

          <div className="info-box">
            <h4>Desvendando o Caminho para a Cachoeira do Inferno</h4>
            <p>
              O acesso à Cachoeira do Inferno é uma aventura em si, com rotas que variam em
              dificuldade, mas que sempre recompensam o explorador. Uma das opções mais
              pitorescas começa na comunidade do Congú. Ao chegar, um ponto de ônibus
              estrategicamente localizado em frente a uma fazenda serve como um marco inicial.
              A partir daí, a jornada continua por um caminho que se bifurca. Siga pela direita, onde
              um tanque de água se torna seu próximo ponto de referência, e continue adiante,
              imerso na paisagem que o levará a este tesouro natural.
            </p>
          </div>

          <div className="warning-box">
            <h4>Importante: Segurança em Primeiro Lugar</h4>
            <p>
              É importante lembrar que, como em todo ambiente natural, a prudência é sua melhor
              aliada. A vida selvagem, incluindo a presença de cobras peçonhentas, faz parte do
              ecossistema local, e a correnteza da cachoeira pode ser forte. Aprecie a beleza, mas
              sempre com cautela e respeito pela natureza.
            </p>
          </div>

          <div className="gallery">
            <img src="imagens/inferno1.jpg" alt="Vista da Cachoeira do Inferno" />
            <img src="imagens/inferno2.jpg" alt="Detalhe da Cachoeira do Inferno" />
            <img src="imagens/inferno3.jpg" alt="Paisagem da Cachoeira do Inferno" />
          </div>

          <div className="button-container">
            <a
              href="https://maps.app.goo.gl/P7f1Y4AnoAq2TWuT8?g_st=iw"
              target="_blank"
              rel="noreferrer"
              className="map-button"
            >
              Ver no Google Maps
            </a>
          </div>
        </section>

        <div className="divider" />

        {/* Cachoeira das Sete Voltas */}
        <section className="cachoeira-section">
          <h2>Cachoeira das Sete Voltas: Um Refúgio de Serenidade</h2>

          <p>
            A Cachoeira das Sete Voltas é um refúgio de paz e beleza que, por ser uma área mais
            reservada, oferece uma experiência de visitação exclusiva e íntima. Com a devida
            autorização, os visitantes podem desfrutar de um ambiente sereno e intocado, onde a
            natureza se manifesta em sua plenitude. Suas águas, que há muito tempo servem
            para a irrigação e para o banho de animais como cavalos, carregam a essência de
            uma conexão profunda entre o homem e a terra, um testemunho da vida rural e da
            sustentabilidade.
          </p>

          <p>
            A beleza da Cachoeira das Sete Voltas reside em sua delicadeza e na forma como se
            integra à paisagem. Embora sua força d'água não seja tão avassaladora quanto a de
            outras cachoeiras, ela possui um encanto particular, com pedras que, embora
            escorregadias, convidam à admiração e à contemplação. É um local para se reconectar
            com a natureza, sentir a brisa e ouvir o suave murmúrio das águas, um convite à
            tranquilidade e à renovação.
          </p>

          <div className="info-box">
            <h4>Acesso Tranquilo à Cachoeira das Sete Voltas</h4>
            <p>
              Chegar à Cachoeira das Sete Voltas é uma experiência descomplicada e agradável.
              Partindo da estrada que liga Cravolândia a Três Braços, a rota é direta e visualmente
              recompensadora. Basta seguir o caminho principal até que a cachoeira se revele,
              aninhada em um mangueiro pitoresco, próximo à estrada. A facilidade de acesso,
              aliada à necessidade de autorização prévia por se tratar de uma área privada, garante
              que a visita seja sempre organizada e respeitosa com o ambiente e seus proprietários.
            </p>
          </div>

          <div className="warning-box">
            <h4>Atenção: Área Privada</h4>
            <p>
              Lembre-se sempre de obter permissão para desfrutar plenamente deste tesouro
              escondido e de ter cautela com as pedras escorregadias, garantindo uma experiência
              segura e memorável.
            </p>
          </div>

          <div className="gallery">
            <img src="imagens/sete-voltas1.jpg" alt="Cachoeira das Sete Voltas" />
            <img src="imagens/sete-voltas2.jpg" alt="Vista da Cachoeira das Sete Voltas" />
            <img src="imagens/sete-voltas3.jpg" alt="Águas da Cachoeira das Sete Voltas" />
          </div>

          <div className="button-container">
            <a
              href="https://maps.app.goo.gl/tQGBp8ceBdUuRuPm8?g_st=iw"
              target="_blank"
              rel="noreferrer"
              className="map-button"
            >
              Ver no Google Maps
            </a>
          </div>
        </section>

        <div className="divider" />

        {/* Cachoeira de Cesar */}
        <section className="cachoeira-section">
          <h2>Cachoeira de Cesar: A Joia Escondida de Três Braços</h2>

          <p>
            Outrora um vibrante ponto de encontro e lazer para as famílias locais, a Cachoeira de
            Cesar carrega consigo histórias de verões ensolarados e risadas contagiantes.
            Imagine-se em um tempo onde as águas cristalinas eram o palco para mergulhos
            refrescantes e a natureza intocada convidava à diversão descompromissada. Embora
            os relatos locais não mencionem incidentes trágicos, a memória de sua beleza e
            vitalidade permanece viva.
          </p>

          <p>
            O acesso a este paraíso, no entanto, exige um pouco de aventura e cautela. A trilha que
            serpenteia até a cachoeira revela uma escadaria natural, que, embora desafiadora
            devido à presença de musgo e à umidade constante trazida pela brisa da queda
            d'água, recompensa cada passo com vistas deslumbrantes. A sensação de superação
            ao descer por este caminho íngreme é apenas o prelúdio da grandiosidade que o
            espera.
          </p>

          <p>
            A Cachoeira de Cesar é mais do que um simples corpo d'água; é um espetáculo da
            natureza. Suas grandes proporções e a profusão de vida que a cerca a transformam
            em um santuário natural. A flora e a fauna locais prosperam em seu entorno, criando
            um ambiente de biodiversidade que encanta e inspira. É o local ideal para fotógrafos,
            observadores de aves e para todos que buscam uma conexão profunda com o meio
            ambiente.
          </p>

          <div className="info-box">
            <h4>Como Chegar à Cachoeira de Cesar</h4>
            <p>
              A sua aventura começa em Três Braços. De lá, siga pela estrada que leva à acolhedora
              comunidade da Piabanha. A rota é singular e bem definida, tornando quase
              impossível se perder. Fique atento à sinalização e, ao avistar a imponente Fazenda do
              Rio Preto, você saberá que chegou ao seu destino. É fundamental, por respeito à propriedade
              privada e para garantir a sua segurança, solicitar a devida autorização ao proprietário
              da fazenda antes de prosseguir. Uma vez concedida a permissão, uma trilha bem
              demarcada o guiará até a deslumbrante beleza natural da cachoeira.
            </p>
          </div>

          <div className="gallery">
            <img src="imagens/cesar1.jpg" alt="Cachoeira de Cesar" />
            <img src="imagens/cesar2.jpg" alt="Trilha da Cachoeira de Cesar" />
            <img src="imagens/cesar3.jpg" alt="Vista panorâmica da Cachoeira de Cesar" />
            <img src="imagens/cesar4.jpg" alt="Cachoeira de Cesar - Ângulo 4" />
            <img src="imagens/cesar5.jpg" alt="Cachoeira de Cesar - Ângulo 5" />
            <img src="imagens/cesar6.jpg" alt="Cachoeira de Cesar - Ângulo 6" />
          </div>

          <div className="button-container">
            <a
              href="https://maps.app.goo.gl/fRvZzrPriXm3vfVj6?g_st=iw"
              target="_blank"
              rel="noreferrer"
              className="map-button"
            >
              Ver no Google Maps
            </a>
          </div>
        </section>

        <div className="divider" />

        {/* Cachoeira do Sobradinho */}
        <section className="cachoeira-section">
          <h2>Cachoeira do Sobradinho: Um Refúgio de Paz e História</h2>

          <p>
            Escondida da agitação e pouco explorada pelos roteiros turísticos convencionais, a
            Cachoeira do Sobradinho é um convite à introspecção e à descoberta de um passado
            simples e autêntico. Suas águas, que hoje servem principalmente para a vital irrigação
            das terras férteis da região, outrora desempenharam um papel central na vida
            cotidiana das comunidades, sendo utilizadas para lavar roupas, utensílios e nutrir as
            famílias com sua pureza. Este legado de utilidade e conexão com a terra confere à
            cachoeira um charme especial e uma história a ser contada.
          </p>

          <p>
            O caminho até a Cachoeira do Sobradinho é uma jornada à parte, que adiciona um
            toque de exclusividade à sua visita. Embora o acesso possa ser um pouco mais
            desafiador, com trechos de mata densa e um terreno irregular, cada obstáculo
            superado é um passo em direção a um cenário de beleza rústica e intocada. Esta
            cachoeira, apesar de sua natureza mais reclusa, é um verdadeiro deleite para os olhos,
            especialmente no ponto de sua queda d'água. Ali, a força da natureza esculpiu uma
            pequena, mas encantadora, mini piscina natural, um convite irrecusável para um
            mergulho refrescante e para momentos de puro deleite em meio à tranquilidade.
          </p>

          <div className="info-box">
            <h4>Como Chegar à Cachoeira do Sobradinho</h4>
            <p>
              Partindo de Três Braços, siga pela pitoresca estrada do Sobradinho. A localização da
              cachoeira pode ser um pouco discreta, pois ela se aninha discretamente ao lado da
              estrada, e o acesso é feito por um caminho mais estreito, que adiciona um elemento
              de descoberta à sua chegada. Este detalhe, no entanto, apenas realça a sensação de
              ter encontrado um verdadeiro refúgio, um lugar onde a natureza se manifesta em sua
              forma mais pura e serena, longe das multidões.
            </p>
          </div>

          <div className="gallery">
            <img src="imagens/sobradinho1.jpg" alt="Cachoeira do Sobradinho" />
          </div>

          <div className="button-container">
            <a
              href="https://maps.app.goo.gl/k28RkfuWbZE7gofd7?g_st=iw"
              target="_blank"
              rel="noreferrer"
              className="map-button"
            >
              Ver no Google Maps
            </a>
          </div>
        </section>
      </div>

      <footer>
        <p>
          <strong>✨ Equipe de Autores ✨</strong>
        </p>
        <div className="authors">
          <div className="author">José Vinícius</div>
          <div className="author">Rafael</div>
          <div className="author">Thaise</div>
          <div className="author">Wanderson</div>
        </div>
        <p style={{ marginTop: "30px", opacity: 0.8 }}>Três Braços - Bahia | 2025</p>
      </footer>

      <div
        className="scroll-indicator"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </div>
    </>
  );
};

export default PostOne;
