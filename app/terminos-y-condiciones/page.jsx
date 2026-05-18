import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Términos y Condiciones | Kert S.A.S',
  description: 'Términos y Condiciones de Kert S.A.S según la legislación colombiana. Conoce tus derechos y obligaciones al utilizar nuestros servicios.',
  keywords: 'términos y condiciones, términos de uso, condiciones generales, Kert S.A.S, ley de protección al consumidor',
};

export default function TerminosCondiciones() {
  return (
    <main className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link 
          href="/" 
          className="inline-flex items-center text-azul hover:text-amarillo transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a inicio
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-azul mb-8 border-b border-amarillo pb-4">
          Términos y Condiciones
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="font-medium text-lg">
            Fecha de última actualización: {new Date().toLocaleDateString('es-CO', {year: 'numeric', month: 'long', day: 'numeric'})}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">1. Introducción</h2>
            <p>
              Los presentes Términos y Condiciones (en adelante, los "Términos") rigen la relación contractual entre KERT S.A.S., 
              identificada con NIT 901398420-7, con domicilio en Carrera 29B bis N.1 A-70, Colombia (en adelante "KERT", "nosotros" o "la empresa") 
              y los usuarios, clientes o visitantes (en adelante, "Usuario" o "Usuarios") que accedan, utilicen o adquieran 
              los productos y servicios ofrecidos por KERT.
            </p>
            <p className="mt-2">
              Al acceder, navegar o utilizar los servicios ofrecidos por KERT, el Usuario acepta estos Términos y Condiciones 
              en su totalidad. Si no está de acuerdo con estos Términos o con cualquier cambio o modificación posterior, 
              deberá abstenerse de acceder o utilizar los servicios de KERT.
            </p>
            <p className="mt-2">
              Es importante aclarar que nuestro sitio web actualmente es de carácter informativo y no recolecta datos personales 
              a través de formularios en línea. La relación comercial y recolección de información necesaria para transacciones 
              se realiza a través de canales directos de comunicación como correo electrónico, teléfono o presencialmente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">2. Marco Legal</h2>
            <p>
              Estos Términos y Condiciones se rigen por las leyes de la República de Colombia, incluyendo pero no limitado a:
            </p>
            <ul className="space-y-2">
              <li>Constitución Política de Colombia</li>
              <li>Ley 1480 de 2011 (Estatuto del Consumidor)</li>
              <li>Ley 527 de 1999 (Ley de Comercio Electrónico)</li>
              <li>Ley 1581 de 2012 (Ley de Protección de Datos Personales)</li>
              <li>Decreto 1074 de 2015 (Decreto Único Reglamentario del Sector Comercio, Industria y Turismo)</li>
              <li>Código Civil y Código de Comercio colombianos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">3. Productos y Servicios</h2>
            <p>
              KERT S.A.S. se especializa en la fabricación y comercialización de maletas, mochilas y accesorios 
              al por mayor en Colombia, ofreciendo productos de alta calidad para empresas y distribuidores.
            </p>
            <p className="mt-2">
              Todos los productos y servicios ofrecidos por KERT están sujetos a disponibilidad. 
              La empresa se reserva el derecho de modificar, cambiar, agregar o eliminar productos o servicios en cualquier momento, 
              sin previo aviso y a su exclusiva discreción.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">4. Condiciones de Uso del Sitio Web</h2>
            <p>Al utilizar nuestro sitio web, el Usuario se compromete a:</p>
            <ul className="space-y-2">
              <li>Utilizar el sitio web de manera lícita y de acuerdo con estos Términos y Condiciones.</li>
              <li>No realizar actividades que puedan dañar, inutilizar, sobrecargar o deteriorar el sitio web.</li>
              <li>No utilizar ningún robot, araña, u otro dispositivo automático o proceso manual para monitorear o copiar nuestras páginas web o su contenido.</li>
              <li>No interferir con, o intentar acceder sin autorización a cualquier parte de los servicios, a otros sistemas o redes conectados al sitio web, a cualquier servidor de KERT, o a cualquiera de los servicios ofrecidos.</li>
              <li>Respetar todos los derechos de propiedad intelectual relacionados con el contenido del sitio.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">5. Proceso de Pedido y Compra</h2>
            <p>
              Para realizar un pedido, el Usuario deberá contactar directamente a KERT a través de los canales 
              de comunicación establecidos (teléfono, correo electrónico o visita personal). El proceso de pedido puede incluir, entre otros:
            </p>
            <ul className="space-y-2">
              <li>Solicitud de cotización a través de correo electrónico o teléfono.</li>
              <li>Evaluación y aprobación de la cotización por parte del Usuario.</li>
              <li>Confirmación del pedido y condiciones de pago.</li>
              <li>Pago según las condiciones establecidas.</li>
              <li>Fabricación y/o preparación del pedido.</li>
              <li>Entrega de los productos según lo acordado.</li>
            </ul>
            <p className="mt-2">
              KERT se reserva el derecho de rechazar o cancelar cualquier pedido por razones de disponibilidad, 
              errores en la información de precios o descripción de productos, o por cualquier otra razón.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">6. Precios y Pagos</h2>
            <p>
              Los precios de los productos están expresados en pesos colombianos (COP) e incluyen el IVA cuando corresponda. 
              KERT se reserva el derecho de cambiar los precios en cualquier momento sin previo aviso.
            </p>
            <p className="mt-2">
              Los pagos pueden realizarse a través de los medios establecidos por KERT, los cuales pueden incluir:
            </p>
            <ul className="space-y-2">
              <li>Transferencia bancaria</li>
              <li>Pago con tarjeta de crédito/débito (presencial)</li>
              <li>Otros métodos de pago autorizados por la empresa</li>
            </ul>
            <p className="mt-2">
              En caso de pedidos especiales o personalizados, KERT podrá solicitar un anticipo como condición para iniciar 
              la fabricación o preparación del pedido, según los términos acordados entre las partes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">7. Entregas y Envíos</h2>
            <p>
              KERT realiza envíos a nivel nacional en Colombia. Los tiempos de entrega dependen del destino, 
              disponibilidad del producto y volumen del pedido.
            </p>
            <p className="mt-2">
              Los riesgos de pérdida y daño de los productos se transfieren al Usuario en el momento en que los productos 
              son entregados al transportador o empresa de mensajería, salvo que se acuerde de manera distinta entre las partes.
            </p>
            <p className="mt-2">
              KERT no será responsable por retrasos en la entrega debido a causas ajenas a su control, 
              incluyendo pero no limitado a: condiciones climáticas adversas, desastres naturales, bloqueos viales, 
              actos de autoridades gubernamentales, o cualquier otra circunstancia de fuerza mayor.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">8. Garantías</h2>
            <p>
              KERT garantiza que todos sus productos están libres de defectos en materiales y mano de obra en el momento de la entrega. 
              La garantía de los productos es de [insertar período] contados a partir de la fecha de entrega.
            </p>
            <p className="mt-2">
              La garantía no cubre daños causados por:
            </p>
            <ul className="space-y-2">
              <li>Uso inadecuado o contrario a las instrucciones del producto.</li>
              <li>Modificaciones o reparaciones realizadas por personal no autorizado por KERT.</li>
              <li>Desgaste normal por el uso del producto.</li>
              <li>Daños causados por accidentes, maltrato o negligencia.</li>
              <li>Eventos de fuerza mayor o caso fortuito.</li>
            </ul>
            <p className="mt-2">
              Para hacer efectiva la garantía, el Usuario deberá notificar a KERT sobre el defecto dentro de los 
              [insertar período] días siguientes a su descubrimiento, proporcionando una descripción detallada del defecto 
              y, cuando sea posible, evidencia fotográfica o de video.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">9. Cambios y Devoluciones</h2>
            <p>
              En caso de productos defectuosos, KERT aceptará devoluciones y podrá, a su discreción, reemplazar el producto, 
              repararlo o reembolsar el precio pagado.
            </p>
            <p className="mt-2">
              Para solicitar un cambio o devolución, el Usuario deberá:
            </p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Contactar a KERT a través de los canales de comunicación establecidos, dentro de los [insertar período] días siguientes a la recepción del producto.</li>
              <li>Proporcionar el número de pedido, descripción del producto y motivo de la devolución.</li>
              <li>Seguir las instrucciones proporcionadas por KERT para el proceso de devolución.</li>
            </ol>
            <p className="mt-2">
              KERT no aceptará devoluciones de productos personalizados o fabricados según especificaciones proporcionadas 
              por el Usuario, a menos que presenten defectos de fabricación.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">10. Propiedad Intelectual</h2>
            <p>
              Todos los derechos de propiedad intelectual relacionados con KERT, incluyendo pero no limitado a marcas, 
              logotipos, diseños, imágenes, textos, y cualquier otro contenido, son propiedad exclusiva de KERT o 
              sus licenciantes.
            </p>
            <p className="mt-2">
              El Usuario no podrá utilizar, reproducir, adaptar, distribuir, publicar o exhibir ningún contenido protegido 
              por derechos de propiedad intelectual sin el consentimiento previo y por escrito de KERT.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">11. Protección de Datos Personales</h2>
            <p>
              KERT se compromete a proteger la privacidad y los datos personales de los Usuarios de acuerdo con la 
              legislación colombiana vigente, en particular la Ley 1581 de 2012 y el Decreto 1377 de 2013.
            </p>
            <p className="mt-2">
              Es importante señalar que actualmente nuestro sitio web es de carácter informativo y no recolecta datos personales 
              a través de formularios en línea. Cualquier información personal que KERT pueda obtener es proporcionada 
              directamente por los clientes o proveedores a través de canales de comunicación directa como correo electrónico, 
              teléfono o correspondencia física para fines comerciales o contractuales.
            </p>
            <p className="mt-2">
              El tratamiento de los datos personales por parte de KERT se rige por nuestra Política de Privacidad, 
              disponible en <Link href="/politica-de-privacidad" className="text-amarillo hover:underline">Política de Privacidad</Link>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">12. Limitación de Responsabilidad</h2>
            <p>
              KERT no será responsable por daños indirectos, incidentales, especiales, punitivos o consecuentes, 
              incluyendo pérdida de beneficios, ingresos, datos o uso, incurridos por el Usuario o cualquier tercero, 
              ya sea en una acción en contrato o agravio, aun cuando KERT haya sido advertida de la posibilidad de tales daños.
            </p>
            <p className="mt-2">
              La responsabilidad total de KERT por cualquier reclamo bajo estos Términos, incluyendo cualquier garantía implícita, 
              está limitada al precio de compra pagado por el Usuario por los productos o servicios en cuestión.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">13. Resolución de Disputas</h2>
            <p>
              Cualquier controversia o reclamo que surja de o esté relacionado con estos Términos, o el incumplimiento 
              de los mismos, se resolverá mediante negociación directa entre las partes.
            </p>
            <p className="mt-2">
              Si las partes no pueden resolver la disputa mediante negociación, la controversia será resuelta mediante 
              arbitraje de acuerdo con las reglas de la Cámara de Comercio de [insertar ciudad], Colombia. 
              El lugar del arbitraje será [insertar ciudad], Colombia. El laudo arbitral será definitivo y vinculante para las partes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">14. Derecho de Retracto</h2>
            <p>
              De conformidad con el artículo 47 de la Ley 1480 de 2011 (Estatuto del Consumidor), el Usuario tiene derecho a retractarse 
              de la compra dentro de los cinco (5) días hábiles siguientes a la entrega del producto, siempre que:
            </p>
            <ul className="space-y-2">
              <li>El producto no haya sido usado, abierto o deteriorado.</li>
              <li>El producto sea devuelto en su empaque original, con todos sus componentes y en perfecto estado.</li>
              <li>Se trate de productos que no sean personalizados o fabricados según especificaciones del Usuario.</li>
            </ul>
            <p className="mt-2">
              Para ejercer el derecho de retracto, el Usuario deberá notificar a KERT su decisión de retractarse mediante 
              comunicación escrita dentro del plazo establecido. Los costos de transporte y demás, incurridos para la devolución 
              del producto, serán asumidos por el Usuario.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">15. Uso de Cookies</h2>
            <p>
              Nuestro sitio web puede utilizar cookies u otras tecnologías similares para mejorar la experiencia de navegación. 
              Estas tecnologías no recopilan información personal identificable y su único propósito es optimizar la 
              funcionalidad del sitio. El Usuario puede configurar su navegador para rechazar cookies, aunque esto 
              podría afectar algunas funcionalidades del sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">16. Modificaciones a los Términos y Condiciones</h2>
            <p>
              KERT se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. 
              Las modificaciones entrarán en vigor inmediatamente después de su publicación. 
              El uso continuado de los servicios después de cualquier modificación constituirá la aceptación por parte del Usuario 
              de los Términos modificados.
            </p>
            <p className="mt-2">
              Es responsabilidad del Usuario revisar periódicamente estos Términos para estar informado de cualquier actualización.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">17. Disposiciones Generales</h2>
            <ul className="space-y-2">
              <li><strong>Divisibilidad:</strong> Si cualquier disposición de estos Términos se considera inválida o inaplicable, las disposiciones restantes seguirán siendo válidas y aplicables.</li>
              <li><strong>No renuncia:</strong> La falta de acción por parte de KERT con respecto a una violación de estos Términos no constituye una renuncia a cualquier derecho.</li>
              <li><strong>Cesión:</strong> El Usuario no podrá ceder o transferir estos Términos o cualquier derecho u obligación derivados de los mismos sin el consentimiento previo y por escrito de KERT.</li>
              <li><strong>Relación entre las partes:</strong> Nada en estos Términos se interpretará como la creación de una asociación, empresa conjunta, relación de agencia o relación laboral entre KERT y el Usuario.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">18. Contacto</h2>
            <p>
              Para cualquier pregunta o inquietud relacionada con estos Términos y Condiciones, o para presentar un reclamo, 
              el Usuario puede contactar a KERT a través de:
            </p>
            <ul className="space-y-2">
              <li>Correo electrónico: <a href="mailto:contacto@creacionkert.com" className="text-amarillo hover:underline">contacto@creacionkert.com</a></li>
              <li>Teléfono: +57 321 306 2852 o +57 322 300 6013</li>
              <li>Dirección: Carrera 29B bis N.1 A-70</li>
            </ul>
          </section>

          <p className="mt-12 text-sm text-gray-500 border-t border-gray-200 pt-4">
            Al utilizar nuestros servicios, el Usuario confirma que ha leído, entendido y aceptado estos Términos y Condiciones.
          </p>
        </div>
      </div>
    </main>
  );
} 