import React from 'react';
import style from '../styles/Sobre.module.css'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Somos = () => {
    return (
        <div>
            <Header />
            <main>
                <div className={style.sobre}>
                    <h1>Quem somos</h1>

                    <br></br>
                    <br></br>
                    <p>Através da linha de autogestão horizontalizada, o FSMSSS viabiliza um espaço para construção de estratégias de incidência política, utilizado e alimentado pela sociedade civil, para que a materialidade do direito às proteções sociais ampliadas seja pleiteada e a democracia seja exercida ativamente pela população. Atua, portanto, através de projetos que fomentam e articulam redes de sociedade civil envolvendo organizações sindicais, do terceiro setor, movimentos populares, culturais, ambientais e comunidade acadêmica, particularmente na América Latina e Caribe, por meio da formação crítica dos atores e disponibilizando insumos e estrutura para que as estratégias de incidência política sejam melhor formuladas.
                    <br></br><br></br>O FSMSSS inclui todas as dimensões dos direitos civis e políticos, os direitos econômicos, sociais, culturais e ambientais, e lutamos pela seguridade social integral, a partir dos seguintes <strong>conceitos-chave:</strong>
                    
                    <br></br><br></br>
                    <strong>Seguridade civil:</strong> direito à livre expressão e à liberdade de organização, ao acesso à justiça, e à identidade social, racial, étnica, de geração, de gênero e de comportamento sexual, de crença religiosa e política;
                    <br></br>
                    <strong>Seguridade social:</strong> direito à saúde, ao trabalho, à aposentadoria, às proteções específicas, à assistência social, à educação, e à moradia;
                    <br></br>
                    <strong>Seguridade econômica:</strong> renda mínima, acesso ao crédito e aos meios de produção, acesso à terra e à justiça fiscal;
                    <br></br>
                    <strong>Seguridade ambiental:</strong> direito ao meio ambiente integral e integrado às diferentes comunidades.

​                   <br></br>
                   <br></br>

                    <br></br>Nosso Comitê Executivo Regional é composto por  CUT Brasil, a CTC Colômbia, a CTA Argentina e organizações internacionais como a CSA nas Américas e a Internacional de Serviços Públicos – IPS e a UniGlobal no mundo; várias organizações de comunidades e movimentos sociais como a Via Campesina, o Grito das/dos Excluídas/dos – uma rede estendida dos movimentos principalmente católicos progressistas), redes acadêmicas e políticas como o Movimento pela Saúde dos Povos e a Associação Latino-Americana de Medicina Social, assim como organizações humanitárias como Médicos do Mundo, e também movimentos ecológicas de vários países e coalizões de direitos humanos como as associações de direitos humanos do Marrocos do Maghreb e do Sul e Sudeste da Ásia.
                    <br></br><br></br>O FSMSSS integra o Comitê Executivo do G2H2 (<u>Genebra Hub for Global Health</u>), um escritório de enlace em Genebra para advocacy nos espaços da ONU. Também participa do Comitê Executivo do Movimento pela Equidade em Saúde – SHEM (<u>Sustainable Health Equity Movement </u>). Ainda, atua conjuntamente em projetos com o <u>Grito Dos/as Excluídos/as Continental</u>. Participa, também, da <u>Ágora dos/das Habitantes da Terra</u>.
                    <br></br><br></br>Somos uma plataforma sustentada pelo trabalho voluntário e, sem financiamento regular, mobilizamos recursos para cada atividade e contamos com a solidariedade das organizações participantes. Para unir-se a nós, acesse nossos editais de voluntariado e entre em contato conosco para apoio, como pessoa física ou organização.</p>
                
                
                    
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Somos;