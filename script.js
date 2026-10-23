// ============================================================================
// 1. MENU MOBILE E DESTAQUE DO LINK ATIVO CONFORME A ROLAGEM DA PÁGINA
// ============================================================================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinksContainer = document.getElementById('navLinks');
const navLinks = document.querySelectorAll('.nav-link');

mobileMenuBtn.addEventListener('click', () => {
  navLinksContainer.classList.toggle('open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinksContainer.classList.remove('open');
  });
});

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  let scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(l => l.classList.remove('active'));
      const activeLink = document.querySelector(`.nav-links a[href*=${sectionId}]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
});

// ============================================================================
// 2. BOTÃO "VER DEMAIS SERVIÇOS" (MOSTRAR / OCULTAR PROCEDIMENTOS EXTRAS)
// ============================================================================
const toggleMoreBtn = document.getElementById('toggleMoreBtn');
const moreProcedures = document.getElementById('moreProcedures');

toggleMoreBtn.addEventListener('click', () => {
  const isHidden = moreProcedures.classList.contains('hidden');
  if (isHidden) {
    moreProcedures.classList.remove('hidden');
    toggleMoreBtn.textContent = 'OCULTAR DEMAIS SERVIÇOS';
  } else {
    moreProcedures.classList.add('hidden');
    toggleMoreBtn.textContent = 'VER DEMAIS SERVIÇOS';
  }
});

// ============================================================================
// 3. DADOS DOS PROCEDIMENTOS E MODAL DE DETALHES (Igual à Foto 6)
// ============================================================================
const proceduresData = {
  lavieen: {
    title: 'PROTOCOLO LASER LAVIEEN ®',
    photos: [
      { file: 'img/modal-lavieen-1.jpg', label: 'Foto 1: Antes/Depois Laser Lavieen' },
      { file: 'img/modal-lavieen-2.jpg', label: 'Foto 2: Antes/Depois Laser Lavieen' },
      { file: 'img/modal-lavieen-3.jpg', label: 'Foto 3: Antes/Depois Laser Lavieen' }
    ],
    description: `
      <p>O Protocolo Laser Lavieen promove o efeito "BB Laser", tratando manchas, melasma, poros dilatados, linhas finas e uniformizando a textura da pele com rápida recuperação.</p>
      <p>Estimula intensamente o colágeno e devolve o viço e luminosidade natural da pele desde a primeira sessão. Envie suas dúvidas!</p>
    `
  },
  sobrancelhas: {
    title: 'NANOPIGMENTAÇÃO INDOLOR SOBRANCELHAS FIO À FIO',
    photos: [
      { file: 'img/modal-sobrancelha-1.jpg', label: 'Foto 1: Sobrancelha Fio à Fio' },
      { file: 'img/modal-sobrancelha-2.jpg', label: 'Foto 2: Sobrancelha Fio à Fio' },
      { file: 'img/modal-sobrancelha-3.jpg', label: 'Foto 3: Sobrancelha Fio à Fio' },
      { file: 'img/modal-sobrancelha-4.jpg', label: 'Foto 4: Antes/Depois Sobrancelha' },
      { file: 'img/modal-sobrancelha-5.jpg', label: 'Foto 5: Antes/Depois Sobrancelha' }
    ],
    description: `
      <p>Procedimento 100% indolor do início ao fim. Devolve simetria, preenchimento, e uniformidade ao tom das sobrancelhas.</p>
      <p>Manutenção deve ser feita entre 08 e 15 meses, podendo ser feita de forma ANUAL! Custo/ benefício excelente, trabalhamos com pigmentos orgânicos e dermatologicamente testados, retoque incluso no valor. Envie suas dúvidas!</p>
    `
  },
  labial: {
    title: 'NANOPIGMENTAÇÃO LABIAL INDOLOR',
    photos: [
      { file: 'img/modal-labial-1.jpg', label: 'Foto 1: Antes/Depois Labial' },
      { file: 'img/modal-labial-2.jpg', label: 'Foto 2: Antes/Depois Labial' },
      { file: 'img/modal-labial-3.jpg', label: 'Foto 3: Antes/Depois Labial' }
    ],
    description: `
      <p>Técnica 100% indolor que revitaliza a cor natural dos lábios, corrige assimetrias sutis e devolve o aspecto saudável e hidratado.</p>
      <p>Trabalhamos com pigmentos de altíssima qualidade e retoque incluso. Envie suas dúvidas!</p>
    `
  },
  cilios: {
    title: 'EXTENSÃO DE CÍLIOS',
    photos: [
      { file: 'img/modal-cilios-1.jpg', label: 'Foto 1: Extensão de Cílios' },
      { file: 'img/modal-cilios-2.jpg', label: 'Foto 2: Extensão de Cílios' },
      { file: 'img/modal-cilios-3.jpg', label: 'Foto 3: Extensão de Cílios' }
    ],
    description: `
      <p>Extensão de cílios hiper realista desenvolvida para valorizar o seu olhar com leveza, conforto e durabilidade, sem prejudicar a saúde dos fios naturais.</p>
      <p>Agende sua avaliação e escolha o volume ideal para o seu estilo!</p>
    `
  },
  browlamination: {
    title: 'BROW LAMINATION',
    photos: [
      { file: 'img/modal-brow-1.jpg', label: 'Foto 1: Brow Lamination' },
      { file: 'img/modal-brow-2.jpg', label: 'Foto 2: Brow Lamination' },
      { file: 'img/modal-brow-3.jpg', label: 'Foto 3: Brow Lamination' }
    ],
    description: `
      <p>Alinhamento e nutrição dos fios naturais das sobrancelhas, proporcionando um visual mais encorpado, preenchido e moderno.</p>
    `
  },
  delineado: {
    title: 'DELINEADO MICROPIGMENTADO',
    photos: [
      { file: 'img/modal-delineado-1.jpg', label: 'Foto 1: Delineado Micropigmentado' },
      { file: 'img/modal-delineado-2.jpg', label: 'Foto 2: Delineado Micropigmentado' },
      { file: 'img/modal-delineado-3.jpg', label: 'Foto 3: Delineado Micropigmentado' }
    ],
    description: `
      <p>Realce definitivo e delicado para o contorno dos olhos, trazendo praticidade para o seu dia a dia com técnica segura e indolor.</p>
    `
  },
  dermaplaning: {
    title: 'DERMAPLANING',
    photos: [
      { file: 'img/modal-dermaplaning-1.jpg', label: 'Foto 1: Dermaplaning' },
      { file: 'img/modal-dermaplaning-2.jpg', label: 'Foto 2: Dermaplaning' },
      { file: 'img/modal-dermaplaning-3.jpg', label: 'Foto 3: Dermaplaning' }
    ],
    description: `
      <p>Esfoliação física superficial que remove células mortas e a penugem facial, deixando a pele extremamente macia, iluminada e pronta para absorver ativos cosméticos.</p>
    `
  }
};

function openProcedureModal(procKey) {
  const data = proceduresData[procKey];
  if (!data) return;

  document.getElementById('modalTitle').textContent = data.title;
  document.getElementById('modalDescription').innerHTML = data.description;

  const gallery = document.getElementById('modalGallery');
  gallery.innerHTML = data.photos.map(photo => `
    <div class="modal-photo-slot">
      <img src="${photo.file}" alt="${photo.label}" onerror="this.style.display='none'">
      <span>📸 INSERIR:<br><strong>${photo.file}</strong><br>(${photo.label})</span>
    </div>
  `).join('');

  const wppMsg = encodeURIComponent(`Olá! Gostaria de saber mais sobre o procedimento: ${data.title}`);
  document.getElementById('modalWhatsappBtn').href = `https://wa.me/5511953139056?text=${wppMsg}`;

  document.getElementById('procedureModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeProcedureModal() {
  document.getElementById('procedureModal').classList.add('hidden');
  document.body.style.overflow = 'auto';
}

document.getElementById('procedureModal').addEventListener('click', (e) => {
  if (e.target.id === 'procedureModal') closeProcedureModal();
});