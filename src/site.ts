// Única fuente de los datos del negocio. Deben coincidir carácter por carácter
// con la Constancia de Situación Fiscal y con "Información del negocio" en Meta.
export const site = {
  marca: 'MBL-DEV',
  nombreLegal: 'Jose Max Blancarte Lopez',
  telefono: '686 248 4533',
  telefonoHref: 'tel:+526862484533',
  correo: 'blancarte@gmail.com',
  domicilio: 'Calle Montes Azules 2092, Reserva Residencial, 21225 Mexicali, Baja California',
  // Código de Meta > Seguridad de la marca > Dominios. Vacío = no se emite la metaetiqueta.
  metaDomainVerification: '',
  actualizado: '10 de noviembre de 2026',
  // BORRADOR: confirmar que describe lo que el negocio realmente ofrece.
  descripcion:
    'Desarrollo de software a la medida para negocios: sitios web, aplicaciones e integraciones con WhatsApp Business.',
  servicios: [
    {
      nombre: 'Sitios y aplicaciones web',
      detalle: 'Diseño y desarrollo de sitios, paneles administrativos y aplicaciones web a la medida.',
    },
    {
      nombre: 'Integraciones con WhatsApp Business',
      detalle: 'Conexión de la plataforma de WhatsApp Business con los sistemas del negocio: avisos, atención y seguimiento a clientes.',
    },
    {
      nombre: 'Automatización e integraciones',
      detalle: 'Conexión entre sistemas, automatización de procesos y desarrollo de API.',
    },
  ],
};

export const operador = `${site.marca}, operado por ${site.nombreLegal}`;

export const paginas = [
  { href: '/', titulo: 'Inicio' },
  { href: '/contacto/', titulo: 'Contacto' },
  { href: '/privacidad/', titulo: 'Aviso de privacidad' },
  { href: '/terminos/', titulo: 'Términos y condiciones' },
  { href: '/eliminacion-de-datos/', titulo: 'Eliminación de datos' },
];
