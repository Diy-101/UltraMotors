import React, { useEffect } from "react";

const policySections = [
  {
    title: "1. Общие положения / General Provisions",
    content: (
      <>
        <p className="mb-2">
          Настоящая политика обработки персональных данных составлена в
          соответствии с требованиями Федерального закона от 27.07.2006. №
          152-ФЗ «О персональных данных» (далее — Закон о персональных данных) и
          определяет порядок обработки персональных данных и меры по обеспечению
          безопасности персональных данных, предпринимаемые ООО "Ультра Моторс"
          (далее — Оператор).
        </p>
        <p className="mb-2 italic text-gray-600">
          This personal data processing policy is drawn up in accordance with
          the requirements of Federal Law No. 152-FZ dated 27.07.2006 "On
          Personal Data" (hereinafter referred to as the Personal Data Law) and
          determines the procedure for processing personal data and measures to
          ensure the security of personal data taken by LLC "Ultra Motors"
          (hereinafter — Operator).
        </p>
        <ul className="list-disc ml-6 mb-2">
          <li>
            Оператор ставит своей важнейшей целью и условием осуществления своей
            деятельности соблюдение прав и свобод человека и гражданина при
            обработке его персональных данных, в том числе защиты прав на
            неприкосновенность частной жизни, личную и семейную тайну.
            <br />
            <span className="italic text-gray-600">
              The Operator considers the observance of human and civil rights
              and freedoms in the processing of their personal data, including
              the protection of the rights to privacy, personal and family
              secrets, as its most important goal and condition for carrying out
              its activities.
            </span>
          </li>
          <li>
            Настоящая политика Оператора в отношении обработки персональных
            данных (далее — Политика) применяется ко всей информации, которую
            Оператор может получить о посетителях веб-сайта
            https://ultramotors.pro.
            <br />
            <span className="italic text-gray-600">
              This Policy applies to all information that the Operator may
              receive about visitors to the website https://ultramotors.pro.
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    title:
      "2. Основные понятия, используемые в Политике / Key Terms Used in the Policy",
    content: (
      <>
        <ul className="list-disc ml-6 mb-2">
          <li>
            Автоматизированная обработка персональных данных — обработка
            персональных данных с помощью средств вычислительной техники.
            <br />
            <span className="italic text-gray-600">
              Automated processing of personal data — processing of personal
              data using computer technology.
            </span>
          </li>
          <li>
            Блокирование персональных данных — временное прекращение обработки
            персональных данных.
            <br />
            <span className="italic text-gray-600">
              Blocking of personal data — temporary suspension of personal data
              processing.
            </span>
          </li>
          <li>
            Веб-сайт — совокупность графических и информационных материалов, а
            также программ для ЭВМ и баз данных, обеспечивающих их доступность в
            сети интернет по сетевому адресу https://ultramotors.pro.
            <br />
            <span className="italic text-gray-600">
              Website — a set of graphic and information materials, as well as
              computer programs and databases, ensuring their availability on
              the Internet at https://ultramotors.pro.
            </span>
          </li>
          <li>
            Информационная система персональных данных — совокупность
            содержащихся в базах данных персональных данных и обеспечивающих их
            обработку информационных технологий и технических средств.
            <br />
            <span className="italic text-gray-600">
              Personal data information system — a set of personal data
              contained in databases and information technologies and technical
              means ensuring their processing.
            </span>
          </li>
          <li>
            Обезличивание персональных данных — действия, в результате которых
            невозможно определить без использования дополнительной информации
            принадлежность персональных данных конкретному Пользователю.
            <br />
            <span className="italic text-gray-600">
              Depersonalization of personal data — actions that make it
              impossible to determine the ownership of personal data by a
              specific User without additional information.
            </span>
          </li>
          <li>
            Обработка персональных данных — любое действие (операция) или
            совокупность действий с персональными данными.
            <br />
            <span className="italic text-gray-600">
              Processing of personal data — any action (operation) or set of
              actions with personal data.
            </span>
          </li>
          <li>
            Оператор — государственный орган, муниципальный орган, юридическое
            или физическое лицо, самостоятельно или совместно с другими лицами
            организующие обработку персональных данных.
            <br />
            <span className="italic text-gray-600">
              Operator — a state or municipal body, legal or natural person,
              independently or jointly organizing the processing of personal
              data.
            </span>
          </li>
          <li>
            Персональные данные — любая информация, относящаяся прямо или
            косвенно к определенному или определяемому Пользователю веб-сайта.
            <br />
            <span className="italic text-gray-600">
              Personal data — any information relating directly or indirectly to
              a specific or identifiable User of the website.
            </span>
          </li>
          <li>
            Персональные данные, разрешенные субъектом для распространения —
            персональные данные, доступ неограниченного круга лиц к которым
            предоставлен субъектом.
            <br />
            <span className="italic text-gray-600">
              Personal data allowed by the subject for distribution — personal
              data to which an unlimited number of persons have access, provided
              by the subject.
            </span>
          </li>
          <li>
            Пользователь — любой посетитель веб-сайта.
            <br />
            <span className="italic text-gray-600">
              User — any visitor to the website.
            </span>
          </li>
          <li>
            Предоставление персональных данных — действия, направленные на
            раскрытие персональных данных определенному лицу.
            <br />
            <span className="italic text-gray-600">
              Provision of personal data — actions aimed at disclosing personal
              data to a specific person.
            </span>
          </li>
          <li>
            Распространение персональных данных — любые действия, направленные
            на раскрытие персональных данных неопределенному кругу лиц.
            <br />
            <span className="italic text-gray-600">
              Dissemination of personal data — any actions aimed at disclosing
              personal data to an indefinite number of persons.
            </span>
          </li>
          <li>
            Трансграничная передача персональных данных — передача персональных
            данных на территорию иностранного государства.
            <br />
            <span className="italic text-gray-600">
              Cross-border transfer of personal data — transfer of personal data
              to the territory of a foreign state.
            </span>
          </li>
          <li>
            Уничтожение персональных данных — действия, в результате которых
            персональные данные уничтожаются безвозвратно.
            <br />
            <span className="italic text-gray-600">
              Destruction of personal data — actions resulting in the
              irreversible destruction of personal data.
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    title:
      "3. Основные права и обязанности Оператора / Main Rights and Obligations of the Operator",
    content: (
      <>
        <ul className="list-disc ml-6 mb-2">
          <li>
            Оператор имеет право:
            <br />
            <span className="italic text-gray-600">
              The Operator has the right to:
            </span>
            <ul className="list-disc ml-6">
              <li>
                получать от субъекта персональных данных достоверные информацию
                и/или документы, содержащие персональные данные;
                <br />
                <span className="italic text-gray-600">
                  receive from the subject of personal data reliable information
                  and/or documents containing personal data;
                </span>
              </li>
              <li>
                в случае отзыва субъектом персональных данных согласия на
                обработку персональных данных...
                <br />
                <span className="italic text-gray-600">
                  in case of withdrawal by the subject of personal data of
                  consent to the processing of personal data...
                </span>
              </li>
              <li>
                самостоятельно определять состав и перечень мер, необходимых и
                достаточных для обеспечения выполнения обязанностей...
                <br />
                <span className="italic text-gray-600">
                  independently determine the composition and list of measures
                  necessary and sufficient to ensure the fulfillment of
                  obligations...
                </span>
              </li>
            </ul>
          </li>
          <li>
            Оператор обязан:
            <br />
            <span className="italic text-gray-600">
              The Operator is obliged to:
            </span>
            <ul className="list-disc ml-6">
              <li>
                предоставлять субъекту персональных данных по его просьбе
                информацию, касающуюся обработки его персональных данных;
                <br />
                <span className="italic text-gray-600">
                  provide the subject of personal data, upon his request, with
                  information regarding the processing of his personal data;
                </span>
              </li>
              <li>
                организовывать обработку персональных данных в порядке,
                установленном действующим законодательством РФ;
                <br />
                <span className="italic text-gray-600">
                  organize the processing of personal data in accordance with
                  the current legislation of the Russian Federation;
                </span>
              </li>
              <li>
                отвечать на обращения и запросы субъектов персональных данных...
                <br />
                <span className="italic text-gray-600">
                  respond to requests and inquiries from personal data
                  subjects...
                </span>
              </li>
              <li>
                принимать правовые, организационные и технические меры для
                защиты персональных данных...
                <br />
                <span className="italic text-gray-600">
                  take legal, organizational, and technical measures to protect
                  personal data...
                </span>
              </li>
              <li>
                прекратить передачу (распространение, предоставление, доступ)
                персональных данных...
                <br />
                <span className="italic text-gray-600">
                  cease the transfer (distribution, provision, access) of
                  personal data...
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    title:
      "4. Основные права и обязанности субъектов персональных данных / Main Rights and Obligations of Personal Data Subjects",
    content: (
      <>
        <ul className="list-disc ml-6 mb-2">
          <li>
            Субъекты персональных данных имеют право:
            <br />
            <span className="italic text-gray-600">
              Personal data subjects have the right to:
            </span>
            <ul className="list-disc ml-6">
              <li>
                получать информацию, касающуюся обработки его персональных
                данных...
                <br />
                <span className="italic text-gray-600">
                  receive information regarding the processing of their personal
                  data...
                </span>
              </li>
              <li>
                требовать от оператора уточнения его персональных данных...
                <br />
                <span className="italic text-gray-600">
                  require the operator to clarify their personal data...
                </span>
              </li>
              <li>
                выдвигать условие предварительного согласия при обработке
                персональных данных...
                <br />
                <span className="italic text-gray-600">
                  set a condition of prior consent for the processing of
                  personal data...
                </span>
              </li>
              <li>
                на отзыв согласия на обработку персональных данных...
                <br />
                <span className="italic text-gray-600">
                  to withdraw consent to the processing of personal data...
                </span>
              </li>
              <li>
                обжаловать в уполномоченный орган по защите прав субъектов
                персональных данных...
                <br />
                <span className="italic text-gray-600">
                  to appeal to the authorized body for the protection of the
                  rights of personal data subjects...
                </span>
              </li>
            </ul>
          </li>
          <li>
            Субъекты персональных данных обязаны:
            <br />
            <span className="italic text-gray-600">
              Personal data subjects are obliged to:
            </span>
            <ul className="list-disc ml-6">
              <li>
                предоставлять Оператору достоверные данные о себе;
                <br />
                <span className="italic text-gray-600">
                  provide the Operator with accurate data about themselves;
                </span>
              </li>
              <li>
                сообщать Оператору об уточнении (обновлении, изменении) своих
                персональных данных.
                <br />
                <span className="italic text-gray-600">
                  inform the Operator about the clarification (updating,
                  changing) of their personal data.
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    title:
      "5. Принципы обработки персональных данных / Principles of Personal Data Processing",
    content: (
      <>
        <ul className="list-disc ml-6 mb-2">
          <li>
            Обработка персональных данных осуществляется на законной и
            справедливой основе.
            <br />
            <span className="italic text-gray-600">
              Personal data is processed on a lawful and fair basis.
            </span>
          </li>
          <li>
            Обработка персональных данных ограничивается достижением конкретных,
            заранее определенных и законных целей.
            <br />
            <span className="italic text-gray-600">
              Personal data processing is limited to achieving specific,
              predetermined, and lawful purposes.
            </span>
          </li>
          <li>
            Не допускается объединение баз данных, содержащих персональные
            данные...
            <br />
            <span className="italic text-gray-600">
              It is not allowed to combine databases containing personal data...
            </span>
          </li>
          <li>
            Обработке подлежат только персональные данные, которые отвечают
            целям их обработки.
            <br />
            <span className="italic text-gray-600">
              Only personal data that meets the purposes of their processing is
              subject to processing.
            </span>
          </li>
          <li>
            Содержание и объем обрабатываемых персональных данных соответствуют
            заявленным целям обработки.
            <br />
            <span className="italic text-gray-600">
              The content and volume of processed personal data correspond to
              the stated purposes of processing.
            </span>
          </li>
          <li>
            При обработке персональных данных обеспечивается точность
            персональных данных...
            <br />
            <span className="italic text-gray-600">
              When processing personal data, the accuracy of personal data is
              ensured...
            </span>
          </li>
          <li>
            Хранение персональных данных осуществляется в форме, позволяющей
            определить субъекта персональных данных...
            <br />
            <span className="italic text-gray-600">
              Personal data is stored in a form that allows identifying the
              subject of personal data...
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    title:
      "6. Цели обработки персональных данных / Purposes of Personal Data Processing",
    content: (
      <>
        <p className="mb-2">
          Цель обработки — информирование Пользователя посредством отправки
          электронных писем
        </p>
        <p className="mb-2 italic text-gray-600">
          Purpose of processing — informing the User by sending emails
        </p>
        <ul className="list-disc ml-6 mb-2">
          <li>
            Персональные данные: фамилия, имя, отчество, электронный адрес,
            номера телефонов
            <br />
            <span className="italic text-gray-600">
              Personal data: surname, first name, patronymic, email address,
              phone numbers
            </span>
          </li>
        </ul>
        <p className="mb-2">
          Правовые основания: уставные документы Оператора, договоры между
          оператором и субъектом персональных данных
        </p>
        <p className="mb-2 italic text-gray-600">
          Legal grounds: Operator's statutory documents, contracts between the
          operator and the subject of personal data
        </p>
        <ul className="list-disc ml-6 mb-2">
          <li>
            Виды обработки: сбор, запись, систематизация, накопление, хранение,
            уничтожение и обезличивание персональных данных; отправка
            информационных писем на адрес электронной почты
            <br />
            <span className="italic text-gray-600">
              Types of processing: collection, recording, systematization,
              accumulation, storage, destruction, and depersonalization of
              personal data; sending informational emails to the email address
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    title:
      "7. Условия обработки персональных данных / Conditions for Processing Personal Data",
    content: (
      <>
        <ul className="list-disc ml-6 mb-2">
          <li>
            Обработка персональных данных осуществляется с согласия субъекта
            персональных данных.
            <br />
            <span className="italic text-gray-600">
              Personal data is processed with the consent of the personal data
              subject.
            </span>
          </li>
          <li>
            Обработка персональных данных необходима для достижения целей,
            предусмотренных законом...
            <br />
            <span className="italic text-gray-600">
              Personal data processing is necessary to achieve the purposes
              provided for by law...
            </span>
          </li>
          <li>
            Обработка персональных данных необходима для осуществления
            правосудия...
            <br />
            <span className="italic text-gray-600">
              Personal data processing is necessary for the administration of
              justice...
            </span>
          </li>
          <li>
            Обработка персональных данных необходима для исполнения договора...
            <br />
            <span className="italic text-gray-600">
              Personal data processing is necessary for the performance of a
              contract...
            </span>
          </li>
          <li>
            Обработка персональных данных необходима для осуществления прав и
            законных интересов оператора...
            <br />
            <span className="italic text-gray-600">
              Personal data processing is necessary for the exercise of the
              operator's rights and legitimate interests...
            </span>
          </li>
          <li>
            Осуществляется обработка персональных данных, доступ неограниченного
            круга лиц к которым предоставлен субъектом персональных данных...
            <br />
            <span className="italic text-gray-600">
              Processing of personal data, access to which is provided by the
              subject to an unlimited number of persons...
            </span>
          </li>
          <li>
            Осуществляется обработка персональных данных, подлежащих
            опубликованию или обязательному раскрытию...
            <br />
            <span className="italic text-gray-600">
              Processing of personal data subject to publication or mandatory
              disclosure...
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    title:
      "8. Порядок сбора, хранения, передачи и других видов обработки персональных данных / Procedure for Collection, Storage, Transfer, and Other Types of Personal Data Processing",
    content: (
      <>
        <ul className="list-disc ml-6 mb-2">
          <li>
            Безопасность персональных данных обеспечивается путем реализации
            правовых, организационных и технических мер...
            <br />
            <span className="italic text-gray-600">
              The security of personal data is ensured by implementing legal,
              organizational, and technical measures...
            </span>
          </li>
          <li>
            Оператор обеспечивает сохранность персональных данных и принимает
            все возможные меры, исключающие доступ к персональным данным
            неуполномоченных лиц.
            <br />
            <span className="italic text-gray-600">
              The Operator ensures the safety of personal data and takes all
              possible measures to prevent unauthorized access.
            </span>
          </li>
          <li>
            Персональные данные Пользователя никогда, ни при каких условиях не
            будут переданы третьим лицам...
            <br />
            <span className="italic text-gray-600">
              User's personal data will never, under any circumstances, be
              transferred to third parties...
            </span>
          </li>
          <li>
            В случае выявления неточностей в персональных данных, Пользователь
            может актуализировать их самостоятельно...
            <br />
            <span className="italic text-gray-600">
              If inaccuracies in personal data are identified, the User can
              update them independently...
            </span>
          </li>
          <li>
            Срок обработки персональных данных определяется достижением целей...
            <br />
            <span className="italic text-gray-600">
              The period of personal data processing is determined by achieving
              the purposes...
            </span>
          </li>
          <li>
            Вся информация, которая собирается сторонними сервисами...
            <br />
            <span className="italic text-gray-600">
              All information collected by third-party services...
            </span>
          </li>
          <li>
            Установленные субъектом персональных данных запреты на передачу...
            <br />
            <span className="italic text-gray-600">
              Prohibitions established by the personal data subject on
              transfer...
            </span>
          </li>
          <li>
            Оператор при обработке персональных данных обеспечивает
            конфиденциальность персональных данных.
            <br />
            <span className="italic text-gray-600">
              The Operator ensures the confidentiality of personal data during
              processing.
            </span>
          </li>
          <li>
            Оператор осуществляет хранение персональных данных в форме,
            позволяющей определить субъекта персональных данных...
            <br />
            <span className="italic text-gray-600">
              The Operator stores personal data in a form that allows
              identifying the subject...
            </span>
          </li>
          <li>
            Условием прекращения обработки персональных данных может являться
            достижение целей обработки...
            <br />
            <span className="italic text-gray-600">
              The condition for termination of personal data processing may be
              the achievement of the purposes...
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    title:
      "9. Перечень действий, производимых Оператором с полученными персональными данными / List of Actions Performed by the Operator with Received Personal Data",
    content: (
      <>
        <ul className="list-disc ml-6 mb-2">
          <li>
            Оператор осуществляет сбор, запись, систематизацию, накопление,
            хранение, уточнение (обновление, изменение), извлечение,
            использование, передачу (распространение, предоставление, доступ),
            обезличивание, блокирование, удаление и уничтожение персональных
            данных.
            <br />
            <span className="italic text-gray-600">
              The Operator collects, records, systematizes, accumulates, stores,
              clarifies (updates, changes), retrieves, uses, transfers
              (distributes, provides, accesses), depersonalizes, blocks,
              deletes, and destroys personal data.
            </span>
          </li>
          <li>
            Оператор осуществляет автоматизированную обработку персональных
            данных с получением и/или передачей полученной информации по
            информационно-телекоммуникационным сетям или без таковой.
            <br />
            <span className="italic text-gray-600">
              The Operator carries out automated processing of personal data
              with or without the receipt and/or transfer of the received
              information via information and telecommunication networks.
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    title:
      "10. Трансграничная передача персональных данных / Cross-Border Transfer of Personal Data",
    content: (
      <>
        <ul className="list-disc ml-6 mb-2">
          <li>
            Оператор до начала осуществления деятельности по трансграничной
            передаче персональных данных обязан уведомить уполномоченный
            орган...
            <br />
            <span className="italic text-gray-600">
              Before starting activities related to the cross-border transfer of
              personal data, the Operator must notify the authorized body...
            </span>
          </li>
          <li>
            Оператор до подачи вышеуказанного уведомления, обязан получить от
            органов власти иностранного государства...
            <br />
            <span className="italic text-gray-600">
              Before submitting the above notification, the Operator must obtain
              relevant information from the authorities of the foreign state...
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    title:
      "11. Конфиденциальность персональных данных / Confidentiality of Personal Data",
    content: (
      <>
        <p className="mb-2">
          Оператор и иные лица, получившие доступ к персональным данным, обязаны
          не раскрывать третьим лицам и не распространять персональные данные
          без согласия субъекта персональных данных, если иное не предусмотрено
          федеральным законом.
        </p>
        <p className="mb-2 italic text-gray-600">
          The Operator and other persons who have access to personal data are
          obliged not to disclose or distribute personal data to third parties
          without the consent of the personal data subject, unless otherwise
          provided by federal law.
        </p>
      </>
    ),
  },
  {
    title: "12. Заключительные положения / Final Provisions",
    content: (
      <>
        <ul className="list-disc ml-6 mb-2">
          <li>
            Пользователь может получить любые разъяснения по интересующим
            вопросам, касающимся обработки его персональных данных, обратившись
            к Оператору с помощью электронной почты 6801782@mail.ru.
            <br />
            <span className="italic text-gray-600">
              The User can obtain any clarifications on issues of interest
              regarding the processing of their personal data by contacting the
              Operator via email at 6801782@mail.ru.
            </span>
          </li>
          <li>
            В данном документе будут отражены любые изменения политики обработки
            персональных данных Оператором. Политика действует бессрочно до
            замены ее новой версией.
            <br />
            <span className="italic text-gray-600">
              Any changes to the Operator's personal data processing policy will
              be reflected in this document. The Policy is valid indefinitely
              until replaced by a new version.
            </span>
          </li>
          <li>
            Актуальная версия Политики в свободном доступе расположена в сети
            Интернет по адресу https://ultramotors.pro/privacy-policy.
            <br />
            <span className="italic text-gray-600">
              The current version of the Policy is freely available on the
              Internet at https://ultramotors.pro/privacy-policy.
            </span>
          </li>
        </ul>
      </>
    ),
  },
];

const PrivacyPolicy: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Политика в отношении обработки персональных данных
        <br />
        <span className="text-xl font-normal">
          Personal Data Processing Policy
        </span>
      </h1>
      {policySections.map((section, idx) => (
        <section key={idx} className="mb-8">
          <h2 className="text-xl font-semibold mb-3 border-b pb-1">
            {section.title}
          </h2>
          <div className="text-base leading-relaxed">{section.content}</div>
        </section>
      ))}
      <div className="text-sm text-gray-500 mt-10 text-center">
        Последнее обновление: {new Date().toLocaleDateString("ru-RU")}
        <br />
        Last updated: {new Date().toLocaleDateString("en-US")}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
