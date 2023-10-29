// Converter para JSON se implementar o banco de dados!!!!

const dados_produtos = [
    {   
        id: "0001",
        nome: "Mouse Gamer Redragon Cobra",
        preco: 150,
        marca: "Redragon",
        modelo: "M711 V2",
        especificacoes: "<p>Sensor PIXART PMW3325 para Alta Performance (10000 DPI/20G/100ips) (óptico)<br>Iluminação RGB Ajustável: Sistema de Iluminação Chroma RGB! (7 Diferentes Modos de Iluminação)<br>Polling Rate de 1000hz (Tempo de Resposta Ajustável via Software de 1/2/4/8ms)<br>7 Botões Programáveis<br>Comprimento: 1.8 metros- Cabo de fibra trançada<br> 2 Botões Laterais para funções / atalhos, macros e etc<br>Compatível com Software para Configuração de Macro / Ajuste Iluminação RGB / Configurações de Performance<br>Memória Interna para Salvamento de Configurações<br>Base com Pés de Teflon para Deslize Suave<br> 5 Perfis de Configurações para Troca Rápida de Configurações de um Game para Outro<br>Pegada Ergonômica confortável perfeita para Destros<br>Cabo Trançado para maior Resistência</p>",
        conteudo_embalagem: "<p>Mouse Gamer Redragon Cobra Preto RGB M711 V2</p>",
        garantia: "12 meses de garantia",
        peso: "210 gramas (bruto com embalagem)",
        imagens: [
            "../img/mouse_gamer/mouse_gamer_1.jpg",
            "../img/mouse_gamer/mouse_gamer_2.jpg",
            "../img/mouse_gamer/mouse_gamer_3.jpg",
            "../img/mouse_gamer/mouse_gamer_4.jpg"
        ]
    },
//===================================================================
    {   
        id: "0002",
        nome: "Teclado Mecânico Gamer HyperX Alloy MKW100",
        preco: 229.99,
        marca: "HyperX",
        modelo: "4P5E1AA#ABA",
        especificacoes: "<p> Iluminação RGB dinâmica por tecla <br> Estrutura durável em alumínio <br> Descanso para pulso removível <br> Switches mecânicos confiáveis à prova de poeira[2] <br> Conector USB em metal dourado com cabo trançado resistente <br> Personalização avançada com o software HyperX NGENUITY </p>",
        conteudo_embalagem: "<p>Teclado HyperX Alloy MKW100</p>",
        garantia: "24 meses de garantia",
        peso: "1250 gramas (bruto com embalagem)",
        imagens: [
            "../img/teclado_gamer/teclado_gamer.jpg",
            "../img/teclado_gamer/teclado_gamer_1.jpg",
            "../img/teclado_gamer/teclado_gamer_2.jpg",
            "../img/teclado_gamer/teclado_gamer_3.jpg",
        ]
    },
//================================================================
    {   
        id: "0003",
        nome: "Placa de Vídeo RTX 3060 Asus Dual O12G V2 NVIDIA GeForce, 12GB GDDR6, LHR, DLSS, Ray Tracing - DUAL-RTX3060-O12G-V2",
        preco:  2222.21,
        marca: "Asus",
        modelo: "Dual RTX 3060 O12G V2",
        especificacoes: "<p>Especificações</p>",
        conteudo_embalagem: "<p>Placa de Vídeo ASUS <br> Guia do Usuário</p>",
        garantia: "12 meses de garantia",
        peso: "880 gramas (bruto com embalagem)",
        imagens: [
            "../img/rtx_3060/rtx-3060.jpg",
            "../img/rtx_3060/rtx-3060_1.jpg",
            "../img/rtx_3060/rtx-3060_2.jpg",
            "../img/rtx_3060/rtx-3060_3.jpg",
        ]
    },
//================================================================
    {   
        id: "0004",
        nome: "Monitor Gamer Husky Storm 27' LED, Curvo, 165 Hz, Full HD, 1ms, Adaptive Sync, HDMI/DisplayPort, Ajuste de Ângulo - HGMT001",
        preco:  1119.99,
        marca: "Husky Gaming",
        modelo: "MO-HST-27C",
        especificacoes: "<p><b>Tela:</b>Tamanho da tela: 27<br>Proporção da tela: 16:9<br>Curvatura: R1500<br>Resolução máxima: 1080P (FullHD) - 1920x1080<br>Taxa de Atualização: 165Hz (144Hz nativo)<br>Tempo de resposta: 1ms (MPRT)<br>Ângulo de visão: > 178º (H) / 178º (V)<br>Taxa de contraste: 2100:1<br>Cores: 16.7M<br>Brilho: 220 cd/m³<br>Luz de fundo: E-LED<br><b>Recursos:</b><br>Tecnologia Adaptive Sync<br>Redução de Luz azul<br>Flicker Free<br>Modo Gameplus<br>Painel: VA<br>Ajuste de inclinação de 5º a 15º<br>LED Traseiro<br><b>Dimensões:</b><br>616 x 367 x 100 mm<br><b>Conectividade:</b><br>2x HDMI 1.4<br>1x DisplayPort 1.2<br>Saída de áudio 3.5mm<br><b>Alimentação:</b><br>DC12V 3A<br><b>Voltagem:</b><br>Bivolt</p>",
        conteudo_embalagem: "<p>1x Monitor Gamer Husky Storm LED 27 Widescreen Curvo<br>1x Adaptador de Energia<br>1x Manual do Usuário<br>1x Suporte<br>1x Kit de Parafusos<br>1x Cabo DP 1.2</p>",
        garantia: "12 meses de garantia",
        peso: "10753 gramas (bruto com embalagem)",
        imagens: [
            "../img/monitor_gamer/monitor_gamer.jpg",
            "../img/monitor_gamer/monitor_gamer_1.jpg",
            "../img/monitor_gamer/monitor_gamer_2.jpg",
            "../img/monitor_gamer/monitor_gamer_3.jpg",
        ]
    },
//================================================================
    {   
        id: "0005",
        nome: "Headset Gamer HyperX Cloud Blue PS4, Conexão 3.5mm, Driver 53mm, Cancelamento de Ruído, Preto/Azul - 4P5H9AA#ABL",
        preco:  179.99,
        marca: "HyperX",
        modelo: "HHSC2-FA-BL/N",
        especificacoes: "<p>Microfone Removível com Cancelamento de Ruído<br>Controle de Áudio no Fio<br>Conforto com a assinatura HyperX<br>Estrutura durável em alumínio<br>Áudio para imersão no jogo<br>Proporção da tela: 16:9<br>Curvatura: R1500<br>Resolução máxima: 1080P (FullHD) - 1920x1080<br>Taxa de Atualização: 165Hz (144Hz nativo)<br>Tempo de resposta: 1ms (MPRT)<br>Ângulo de visão: > 178º (H) / 178º (V)<br>Taxa de contraste: 2100:1<br>Cores: 16.7M<br>Brilho: 220 cd/m³<br>Luz de fundo: E-LED<br><b>Recursos:</b><br>Tecnologia Adaptive Sync<br>Redução de Luz azul<br>Flicker Free<br>Modo Gameplus<br>Painel: VA<br>Ajuste de inclinação de 5º a 15º<br>LED Traseiro<br><b>Dimensões:</b><br>616 x 367 x 100 mm<br><b>Conectividade:</b><br>2x HDMI 1.4<br>1x DisplayPort 1.2<br>Saída de áudio 3.5mm<br><b>Alimentação:</b><br>DC12V 3A<br><b>Voltagem:</b><br>Bivolt</p>",
        conteudo_embalagem: "<p>1x HyperX Cloud Blue PS4</p>",
        garantia: "24 meses de garantia",
        peso: "1101 gramas (bruto com embalagem)",
        imagens: [
            "../img/headset_gamer/headset_gamer.jpg",
            "../img/headset_gamer/headset_gamer_1.jpg",
            "../img/headset_gamer/headset_gamer_2.jpg",
            "../img/headset_gamer/headset_gamer_3.jpg",
        ]
    },
//================================================================
    {   
        id: "0006",
        nome: "Processador AMD Ryzen 7 5700X, 3.4GHz (4.6GHz Max Turbo), Cache 36MB, AM4, Sem Vídeo - 100-100000926WOF",
        preco:  1299.99,
        marca: "AMD",
        modelo: "100-100000926WOF",
        especificacoes: "<p>Arquitetura: Zen 3<br>Nº de núcleos de CPU: 8<br>Multithreading (SMT): sim<br>Nº de threads: 16<br>Clock Max Boost: Até 4.5GHz<br>Clock básico: 3,4 GHz<br>Cachê L1 total: 512 KB<br>Cachê L2 total: 4 MB<br>Cachê L3 total: 32 MB<br>TDP / TDP Padrão: 65 W<br>Tecnologia de processador para núcleos de CPU: TSMC 7nm FinFET<br>Processor Technology for I/O Die: 12nm (Globalfoundries)<br>Tamanho da matriz de computação da CPU (CCD): 74mm²<br>Tamanho da matriz de E/S (IOD): 125mm²<br>Soquete da CPU: AM4<br>Contagem de soquetes: 1P<br>Tecnologia de aumento de CPU: Aumento de precisão 2<br>Conjunto de instruções: x86-64<br>Extensões compatíveis: AES, AMD-V, AVX, AVX2, FMA3, MMX(+), SHA, SSE, SSE2, SSE3, SSE4.1, SSE4.2, SSE4A, SSSE3, x86-64<br>Solução térmica (PIB): Não incluso<br>Tempo máximo: 90°C<br>Controle de Áudio no Fio<br>Conforto com a assinatura HyperX<br>Estrutura durável em alumínio<br>Áudio para imersão no jogo<br>Proporção da tela: 16:9<br>Curvatura: R1500<br>Resolução máxima: 1080P (FullHD) - 1920x1080<br>Taxa de Atualização: 165Hz (144Hz nativo)<br>Tempo de resposta: 1ms (MPRT)<br>Ângulo de visão: > 178º (H) / 178º (V)<br>Taxa de contraste: 2100:1<br>Cores: 16.7M<br>Brilho: 220 cd/m³<br>Luz de fundo: E-LED<br><b>Recursos:</b><br>Tecnologia Adaptive Sync<br>Redução de Luz azul<br>Flicker Free<br>Modo Gameplus<br>Painel: VA<br>Ajuste de inclinação de 5º a 15º<br>LED Traseiro<br><b>Dimensões:</b><br>616 x 367 x 100 mm<br><b>Conectividade:</b><br>2x HDMI 1.4<br>1x DisplayPort 1.2<br>Saída de áudio 3.5mm<br><b>Alimentação:</b><br>DC12V 3A<br><b>Voltagem:</b><br>Bivolt<b>*Suporte de SO:</b><br>Edição Windows 11 - 64-Bit<br>Edição Windows 10 - 64-Bit<br>RHEL x86 64 bits<br>Ubuntu x86 64 bits<br>*O suporte ao sistema operacional (SO) poderá variar de acordo com o fabricante. <b>Memória:</b><br>Suporte a USB Tipo C: sim<br>Portas nativas USB 3.2 Gen 2 (10 Gbps): 4<br>Portas nativas USB 3.2 Gen 1 (5 Gbps): 0<br>Portas nativas USB 2.0 (480Mbps): 0<br>Portas SATA nativas: 2<br>Versão do PCI Express: PCIe 4.0<br>Pistas PCIe nativas (total/utilizável): 24/20<br>Suporte NVMe: Boot, RAID0, RAID1, RAID10<br>Tipo de memória: DDR4<br>Canais de memória: 2<br>Máx. Memória: 128 GB<br>Subtipo de memória do sistema: UDIMM<br>Suporte ECC: Sim (requer suporte mobo)<br><b>PCIe utilizáveis adicionais da placa-mãe</b><br>AMD X570: 16x Geração 4<br>AMD X470: 2x Geração 3<br>AMD X470: 8x Geração 2<br><b>Velocidade máxima de memória</b><br>2x1R: DDR4-3200<br>2x2R: DDR4-3200<br>4x1R: DDR4-2933<br>4x2R: DDR4-2667<br><b>Tecnologias compatíveis</b><br>Tecnologia AMD StoreMI<br>Arquitetura de núcleo AMD Zen 3<br>Premium AMD Ryzen™ VR-Ready</p>",
        conteudo_embalagem: "<p>01 x Processador AMD Ryzen 7 5700X, Cache 36MB, 3.4GHz (4.6GHz Max Turbo), AM4, Sem Vídeo </p>",
        garantia: "12 meses de garantia",
        peso: "247 gramas (bruto com embalagem)",
        imagens: [
            "../img/ryzen_7/ryzen-7.jpg",
            "../img/ryzen_7/ryzen-7_1.jpg",
            "../img/ryzen_7/ryzen-7_2.jpg",
            "../img/ryzen_7/ryzen-7_3.jpg",
        ]
    },

]

export default dados_produtos