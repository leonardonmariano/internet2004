import type { Metadata } from "next";
import { RetroClient } from "./components/RetroClient";

export const metadata: Metadata = {
  title: "Bazar Turbo 2004 — tecnologia meio útil desde ontem",
  description: "O bazar digital mais barulhento da internet: bugigangas, ofertas e pura energia HTML.",
};

const products = [
  ["🖱️", "Mouse de Bolinha SUPREMO", "Com bolinha removível para você perder embaixo do sofá.", "R$ 89,90", "R$ 12,04", "USB? NEM PENSAR!", "product-pink"],
  ["☎️", "Discador Cósmico 56K", "Faz pi-póóó-grrr e conecta você em apenas uma eternidade.", "R$ 399,00", "R$ 56,06", "BARULHO GRÁTIS", "product-lime"],
  ["💿", "CD-R 700MB Prestige", "Cabe 11 músicas, 940 fotos ruins ou um mistério.zip.", "R$ 24,99", "R$ 3,50", "GRAVA 1 VEZ!!!", "product-blue"],
  ["☕", "Caneca Webmaster Pro", "Transforma café morno em tabelas HTML perfeitamente alinhadas.", "R$ 72,00", "R$ 19,99", "100% CAFEÍNA", "product-orange"],
  ["⌨️", "Teclado Oráculo ABNT2", "A tecla Enter prevê seu futuro. A tecla Esc nega tudo.", "R$ 210,00", "R$ 48,88", "COM FIO GIGANTE", "product-purple"],
  ["📹", "Webcam Fantasma 0.3MP", "Você aparece em oito pixels. Seus amigos imaginam o resto.", "R$ 180,00", "R$ 27,77", "QUASE HD", "product-yellow"],
] as const;

const news = [
  ["13:04", "Cientistas confirmam: assoprar o cartucho ajuda 73% das vezes."],
  ["12:48", "Bairro inteiro entra no MSN e telefone fica misteriosamente ocupado."],
  ["11:11", "Novo emoticon :-) considerado avançado demais para o escritório."],
  ["09:32", "Internauta termina download de música iniciado na terça-feira."],
];

export default function Home() {
  return <>
    <RetroClient />
    <div className="side-parade side-parade-left" aria-hidden="true"><span>★</span><span>💾</span><span>WOW!</span><span>☻</span><span>★</span></div>
    <div className="side-parade side-parade-right" aria-hidden="true"><span>NEW!</span><span>☢</span><span>💿</span><span>!!!</span><span>☻</span></div>

    <main className="site-shell" id="topo">
      <header className="masthead">
        <p className="microbar">ABERTO 25 HORAS POR DIA ★ ATENDIMENTO POR POMBO, FAX E TELEPATIA ★ CNPJ 00.2004.WOW/0001</p>
        <div className="header-grid">
          <div className="trust-box">
            <div className="floppy-mascot" aria-label="Mascote Disquete Jorginho"><span className="floppy-label">1.44<br/>MB</span><span className="eye eye-a"/><span className="eye eye-b"/><span className="smile">ᴗ</span><span className="arm">☞</span></div>
            <strong>EU SOU O<br/><em>JORGINHO!</em></strong><small>você pode confiar num disquete</small>
          </div>
          <div className="brand-zone">
            <div className="traffic-light" aria-label="Semáforo promocional animado"><i className="red"/><i className="yellow"/><i className="green"/></div>
            <div><h1>BAZAR <span>TURBO</span> <b>2004</b></h1><p>A internet cabe toda aqui!!!</p></div>
            <div className="online-box"><span className="online-dot"/> AO VIVO<b data-online-count>27</b><small>PESSOAS ONLINE</small></div>
          </div>
          <div className="status-stack">
            <div className="digital-panel"><small>AGORA</small><b data-clock>00:00:00</b></div>
            <button className="sound-button" type="button" data-sound-toggle>SOM: OFF</button>
            <span className="secure-badge">🔒 SITE QUASE SEGURO</span>
          </div>
        </div>
        <nav className="retro-nav" aria-label="Navegação principal"><a href="#ofertas">OFERTAS!!!</a><a href="#noticias">NOTÍCIAS</a><a href="#ranking">TOP 5</a><a href="#faq">PERGUNTAS</a><a href="#contato">MANDE UM E-MAIL</a></nav>
      </header>

      <div className="marquee" role="region" aria-label="Últimas novidades"><div className="marquee-track"><span>★ ATENÇÃO INTERNAUTAS ★ FRETE GRÁTIS PARA A LUA ★ VOCÊ É O VISITANTE <b data-visitor-inline>00839142</b> ★ NÃO FECHE ESTA JANELA ★ APROVEITE ANTES QUE A INTERNET ACABE ★ </span><span aria-hidden="true">★ ATENÇÃO INTERNAUTAS ★ FRETE GRÁTIS PARA A LUA ★ VOCÊ É O VISITANTE 00839142 ★ NÃO FECHE ESTA JANELA ★ APROVEITE ANTES QUE A INTERNET ACABE ★ </span></div></div>

      <section className="mega-offer" aria-labelledby="mega-title">
        <div className="ufo" aria-hidden="true">🛸</div><div className="burst">HOJE<br/>SÓ HOJE!</div>
        <div className="offer-copy"><span className="eyebrow">⚡ PROMOÇÃO INTERGALÁCTICA DO MILÊNIO ⚡</span><h2 id="mega-title">KIT INTERNET <i>TURBO</i> 2004</h2><p>1 teclado bege + 1 mouse com bolinha + 48 horas de internet discada*</p><div className="price-row"><span>DE <s>R$ 999,99</s><small>por apenas</small></span><strong>12x<br/><b>R$ 9,99</b></strong><button type="button" className="buy-now" data-beep>EU QUERO AGORA!!!</button></div><small className="legal">*Internet pode demorar para chegar. Não inclui linha telefônica, paciência nem mesa de computador.</small></div>
        <div className="computer-art" aria-label="Computador bege decorativo"><div className="monitor"><div className="screen">BEM-VINDO!<br/><span>▮</span></div></div><div className="keyboard">▤ ▤ ▤ ▤ ▤ ▤ ▤</div></div>
      </section>

      <div className="warning-strip"><span>☞</span> VOCÊ NÃO VAI ACREDITAR NAS COISAS TOTALMENTE NECESSÁRIAS ABAIXO! <span>☜</span></div>

      <section className="products-section" id="ofertas" aria-labelledby="offers-title">
        <div className="section-title title-zigzag"><span>💥</span><h2 id="offers-title">OFERTAS QUE DERRETEM O MODEM</h2><span>💥</span></div>
        <p className="center-note blink">CLIQUE COM RESPONSABILIDADE! ESTOQUE CALCULADO NO CHUTE!</p>
        <div className="product-grid">{products.map(([icon,name,copy,oldPrice,price,badge,skin],index)=><article className={`product-card ${skin}`} key={name}><span className="corner-sticker">{index%2?"WOW!":"HOT!"}</span><div className="product-icon" aria-hidden="true">{icon}</div><span className="product-badge">{badge}</span><h3>{name}</h3><p>{copy}</p><div className="old-price">era <s>{oldPrice}</s></div><div className="product-price">{price}</div><button type="button" data-add-cart={name}>ADICIONAR AO CARRINHO 🛒</button></article>)}</div>
      </section>

      <section className="comparison" aria-labelledby="comparison-title">
        <div className="section-title title-orange"><h2 id="comparison-title">MAS ISSO É BARATO MESMO???</h2></div><p className="data-ribbon">CÁLCULO FEITO PELO NOSSO COMPUTADOR CENTRAL PENTIUM III</p>
        <div className="versus-grid"><div className="versus-item"><span className="huge-emoji">☎️</span><b>1 DISCADOR CÓSMICO</b><small>por R$ 56,06</small></div><div className="versus-word">VS.</div><div className="versus-item sad"><span className="huge-emoji">🍕</span><b>0,43 PIZZAS DE CALABRESA</b><small>sem borda, sem refrigerante, sem alegria</small></div></div>
        <div className="thought-box">VOCÊ ECONOMIZA O EQUIVALENTE A <strong>3.274 MINUTOS</strong> DE TELEFONE OCUPADO!!!</div>
      </section>

      <section className="included" aria-labelledby="included-title"><div className="section-title title-lime"><h2 id="included-title">O QUE VEM NESSA MARAVILHA?</h2></div><div className="included-grid"><div className="arrow-callout"><b>É MUITA<br/>COISA!!!</b><span>➜</span></div><ul><li><span>🛡️</span><b>GARANTIA MORAL</b><small>Se quebrar, nós lamentamos junto com você.</small></li><li><span>📦</span><b>CAIXA ENORME</b><small>Chega ocupando 74% da sala.</small></li><li><span>📄</span><b>MANUAL DE 2 PÁGINAS</b><small>Uma delas é a capa. A outra está de cabeça para baixo.</small></li><li><span>✨</span><b>BRILHO DIGITAL</b><small>Aplicado cuidadosamente em todos os pixels.</small></li></ul></div></section>

      <div className="mini-banner-wall" aria-label="Banners promocionais"><div className="banner-fire">🔥 PREÇOS PEGANDO FOGO 🔥</div><div className="banner-webmaster">WEBMASTER APROVOU ✓</div><div className="banner-click">➤ CLIQUE EM TUDO! ➤</div><div className="banner-y2k">PROTEGIDO CONTRA O BUG DO MILÊNIO</div><div className="banner-win">FUNCIONA EM COMPUTADORES*</div><div className="banner-cool">100% RADICAL</div></div>

      <div className="two-column-chaos">
        <section className="news-board" id="noticias" aria-labelledby="news-title"><div className="section-title title-blue"><h2 id="news-title">📰 PLANTÃO DA INTERNET</h2></div>{news.map(([time,headline])=><article key={time}><time>{time}</time><p>{headline}</p><span>NEW!</span></article>)}<button className="more-button" type="button" data-beep>LER MAIS 847 NOTÍCIAS »</button></section>
        <aside className="widgets" aria-label="Indicadores do bazar">
          <div className="widget modem-widget"><h3>VELOCÍMETRO DA WEB</h3><div className="gauge"><i/></div><b>56 Kbps</b><small>PERIGO: RÁPIDO DEMAIS</small></div>
          <div className="widget weather-widget"><h3>CLIMA NO SERVIDOR</h3><span>🌩️</span><b>38°C</b><small>VENTOINHA: GRITANDO</small></div>
          <div className="widget poll-widget"><h3>ENQUETE URGENTE</h3><p>Você assopra o cartucho?</p><button type="button" data-poll="SIM">SIM (CORRETO)</button><button type="button" data-poll="NÃO">NÃO (SUSPEITO)</button><small data-poll-result>9.842 votos computados</small></div>
        </aside>
      </div>

      <section className="ranking" id="ranking" aria-labelledby="ranking-title"><div className="section-title title-purple"><h2 id="ranking-title">🏆 TOP 5 OBJETOS MAIS DESEJADOS DA SEMANA 🏆</h2></div><table><thead><tr><th>POS.</th><th>OBJETO</th><th>CLIQUEZES</th><th>NÍVEL DE RADICALIDADE</th></tr></thead><tbody><tr><td>🥇 1</td><td>Mouse de Bolinha Supremo</td><td>9.999</td><td><meter min="0" max="100" value="100">100%</meter> INSANO</td></tr><tr><td>🥈 2</td><td>CD-R Prestige</td><td>8.004</td><td><meter min="0" max="100" value="88">88%</meter> BRABO</td></tr><tr><td>🥉 3</td><td>Webcam Fantasma</td><td>7.777</td><td><meter min="0" max="100" value="76">76%</meter> PIXELADO</td></tr><tr><td>4</td><td>Caneca Webmaster</td><td>6.660</td><td><meter min="0" max="100" value="69">69%</meter> CAFEINADO</td></tr><tr><td>5</td><td>Teclado Oráculo</td><td>5.404</td><td><meter min="0" max="100" value="55">55%</meter> MÍSTICO</td></tr></tbody></table></section>

      <section className="testimonials" aria-labelledby="testimonial-title"><div className="section-title title-red"><h2 id="testimonial-title">O POVO FALOU NO NOSSO LIVRO DE VISITAS</h2></div><div className="testimonial-grid"><blockquote><span>“</span>Comprei um mouse e agora meu computador aponta para lugares que eu nem sabia que existiam.<cite>— Kátia_89, Osasco/SP</cite></blockquote><blockquote><span>“</span>A embalagem tinha sete metros de plástico-bolha. Estouro até hoje. Excelente pós-venda!<cite>— xX_Rodrigão_Xx, Piracicaba/SP</cite></blockquote><blockquote><span>“</span>O modem fez um barulho que acordou meu periquito. Cinco estrelas e um alpiste.<cite>— Neide, via e-mail eletrônico</cite></blockquote></div></section>

      <section className="deal-day" aria-labelledby="deal-title"><div className="explosion">SUPER<br/>RARO!</div><div className="deal-copy"><span>OFERTA DO DIA 11/09/2004</span><h2 id="deal-title">A ÚLTIMA DISQUETEIRA DO UNIVERSO</h2><p>Organizador de luxo para <b>até 20 disquetes</b>. Tampa fumê. Fecho que faz “clac”. Alça imaginária.</p></div><div className="disk-case" aria-hidden="true"><i>💾</i><i>💾</i><i>💾</i></div><div className="deal-price"><s>R$ 149</s><b>R$ 20,04</b><button type="button" data-beep>RESERVAR JÁ!!!</button></div></section>

      <section className="faq" id="faq" aria-labelledby="faq-title"><div className="section-title title-cyan"><h2 id="faq-title">❓ PERGUNTAS FREQUENTEMENTE DIGITADAS ERRADO</h2></div><div className="faq-grid"><details open><summary>VOCÊS ENTREGAM PELO CORREIO?</summary><p>Sim. Também estudamos entrega por fax, mas os objetos continuam entalando.</p></details><details><summary>MEU COMPUTADOR VAI FICAR MAIS RÁPIDO?</summary><p>Se você colocar rodinhas nele, certamente.</p></details><details><summary>O PAGAMENTO É SEGURO?</summary><p>Nosso cadeado desenhado à mão está sempre de olho. Aceitamos cartão fictício, cheque e moedas de chocolate.</p></details><details><summary>POSSO DEVOLVER?</summary><p>Pode, mas o Disquete Jorginho fica emocionalmente abalado por 3 a 5 dias úteis.</p></details></div></section>

      <section className="contact-zone" id="contato" aria-labelledby="contact-title"><div className="contact-mascot" aria-hidden="true">💾<span>OI!</span></div><div><p className="scribble">FALE COM UM SER HUMANO (TALVEZ)</p><h2 id="contact-title">MANDE UM E-MAIL ELETRÔNICO!</h2><p>Respostas em até 6 minutos ou 4 dias, dependendo do alinhamento dos cabos.</p><a href="mailto:alou@bazarturbo2004.test">📧 ALOU@BAZARTURBO2004.TEST</a></div><form className="newsletter" data-newsletter><label htmlFor="email">RECEBA O BOLETIM TURBO:</label><input id="email" name="email" type="email" placeholder="seu@email.aqui" required/><button type="submit">ASSINAR!!!</button><small data-newsletter-status>Nós prometemos apenas 38 e-mails por semana.</small></form></section>

      <footer><div className="footer-badges"><span>BEST VIEWED<br/><b>1024×768</b></span><span>FEITO COM<br/><b>100% HTML</b></span><span>SEM<br/><b>TÉDIO</b></span><span>Y2K<br/><b>OK!</b></span><span>EDIÇÃO<br/><b>4.04</b></span></div><div className="footer-counter"><small>VOCÊ É O VISITANTE Nº</small><b data-visitor>00000000</b></div><p>BAZAR TURBO 2004® — TECNOLOGIA MEIO ÚTIL DESDE ONTEM</p><p><a href="#topo">[ VOLTAR AO TOPO ]</a> · MAPA DO SITE FEITO NUM GUARDANAPO · ÚLTIMA ATUALIZAÇÃO: AGORA MESMO</p><small>Este website é uma obra fictícia e original. Nenhum modem foi ferido durante a programação. © 2004–2026.</small><div className="footer-marquee">★ OBRIGADO PELA VISITA ★ ASSINE NOSSO LIVRO ★ MANDE PARA 12 AMIGOS ★ NÃO APERTE ALT+F4 ★</div></footer>
    </main>
  </>;
}
