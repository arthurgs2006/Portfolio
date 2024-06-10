import { Container } from "reactstrap"
import BoxCollapsed from "../../components/academicFormation/BoxCollapsed"
import SupremaLogo from '../../../public/supremalogo.jpeg'
import LeiteCorteLogo from '../../../public/Leite&CorteLogo.png'
import ChaveiroBaraoLogo from '../../../public/ChaveiroCard.png'

export default function () {
    return (
        <>
            <div className="wallpaperMyProjects bg-dark text-white">
                <Container>
                    <header className="text-white pt-5 d-flex gap-3 align-items-center">
                        <a href="/">
                            <i className="bi bi-box-arrow-left h3 "></i>
                        </a>
                        <h1>Experiências Profissionais</h1>
                    </header>
                    <main>
                        <section className="filter d-flex gap-2 align-content-center">
                            <span className="d-flex gap-1 p-1">
                                <i className="bi bi-funnel-fill"></i>
                                Filtro:
                            </span>
                            <b className="border p-1 rounded">Do mais recente para o mais antigo</b>
                        </section>
                        <section className="d-flex flex-column gap-3 pt-3">
                            <BoxCollapsed img_src={SupremaLogo} title="SUPREMA"
                                subtitle="Professor de Robótica e Informática">
                                <ul>
                                    <li>Elaboração de conteúdo e dinâmicas para lecionar estudantes infantojuvenis.</li>
                                    <li>Organização de ferramentas a serem utilizadas durante as aulas.</li>
                                </ul>
                            </BoxCollapsed>
                            <BoxCollapsed img_src={ChaveiroBaraoLogo} title="Chaveiro Barão"
                                subtitle="Auxiliar Geral">
                                <ul>
                                    <li>Atendimento ao Cliente (Presencialmente e via redes sociais).</li>
                                    <li>Prestação de serviços relacionados ao estabelecimento.</li>
                                    <li>Organização e higienização do ambiente de trabalho.</li>
                                    <li>Elaboração de conteúdo para redes sociais e elementos gráficos físicos.</li>
                                    <li>Desenvolvimento de website.</li>
                                    <li>Configuração e gestão de Google AdSense e protocolos do estabelecimento.</li>
                                    <li>Elaboração e gestão de documentos.</li>
                                    <li>Manutenção de equipamentos elétricos e ferramentas.</li>
                                    <li>Suporte técnico para dispositivos utilizados no estabelecimento.</li>
                                    <li>Documentação de planilhas e administração do banco de dados.</li>
                                    <li>Criação de conteúdo e gestão dos canais de comunicação.</li>
                                </ul>
                            </BoxCollapsed>
                            <BoxCollapsed img_src={LeiteCorteLogo} title="Perfil Independente"
                                subtitle="Administrador de Redes Sociais">
                                <ul>
                                    <li>Criação de conteúdo para redes sociais.</li>
                                    <li>Gestão do perfil em canais comerciais.</li>
                                    <li>Gerenciamento de protocolos de AdSense.</li>
                                    <li>Atendimento ao público via canais de comunicação on-line.</li>
                                </ul>
                            </BoxCollapsed>
                        </section>
                    </main>
                </Container>
            </div>
        </>
    )
}