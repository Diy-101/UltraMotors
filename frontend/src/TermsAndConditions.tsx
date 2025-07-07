import React, { useEffect } from "react";

const termsSections = [
  {
    title: "1. Введение / Introduction",
    content: (
      <>
        <p className="mb-2">
          Настоящие Условия использования регулируют доступ и использование
          веб-сайта https://ultramotors.pro (далее — Сайт), предоставляемого ООО
          "Ультра Моторс".
        </p>
        <p className="mb-2 italic text-gray-600">
          These Terms and Conditions govern access to and use of the website
          https://ultramotors.pro (hereinafter — the Site), provided by LLC
          "Ultra Motors".
        </p>
      </>
    ),
  },
  {
    title: "2. Обязанности пользователя / User Obligations",
    content: (
      <>
        <ul className="list-disc ml-6 mb-2">
          <li>
            Пользователь обязуется использовать Сайт только в законных целях.
            <br />
            <span className="italic text-gray-600">
              The user agrees to use the Site only for lawful purposes.
            </span>
          </li>
          <li>
            Пользователь не должен предпринимать действий, которые могут
            нарушить работу Сайта или привести к нарушению прав третьих лиц.
            <br />
            <span className="italic text-gray-600">
              The user must not take actions that may disrupt the operation of
              the Site or infringe the rights of third parties.
            </span>
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Интеллектуальная собственность / Intellectual Property",
    content: (
      <>
        <p className="mb-2">
          Все материалы, размещенные на Сайте, включая тексты, изображения,
          логотипы и программное обеспечение, являются собственностью ООО
          "Ультра Моторс" или используются на законных основаниях.
        </p>
        <p className="mb-2 italic text-gray-600">
          All materials posted on the Site, including texts, images, logos, and
          software, are the property of LLC "Ultra Motors" or are used lawfully.
        </p>
      </>
    ),
  },
  {
    title: "4. Ограничение ответственности / Limitation of Liability",
    content: (
      <>
        <p className="mb-2">
          ООО "Ультра Моторс" не несет ответственности за любые убытки,
          возникшие в результате использования или невозможности использования
          Сайта.
        </p>
        <p className="mb-2 italic text-gray-600">
          LLC "Ultra Motors" is not liable for any damages arising from the use
          or inability to use the Site.
        </p>
      </>
    ),
  },
  {
    title: "5. Применимое право / Governing Law",
    content: (
      <>
        <p className="mb-2">
          Настоящие Условия регулируются законодательством Российской Федерации.
        </p>
        <p className="mb-2 italic text-gray-600">
          These Terms are governed by the laws of the Russian Federation.
        </p>
      </>
    ),
  },
  {
    title: "6. Контактная информация / Contact Information",
    content: (
      <>
        <p className="mb-2">
          По всем вопросам, связанным с использованием Сайта, обращайтесь по
          электронной почте: 6801782@mail.ru
        </p>
        <p className="mb-2 italic text-gray-600">
          For all questions related to the use of the Site, please contact:
          6801782@mail.ru
        </p>
      </>
    ),
  },
];

const TermsAndConditions: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Условия использования
        <br />
        <span className="text-xl font-normal">Terms and Conditions</span>
      </h1>
      {termsSections.map((section, idx) => (
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

export default TermsAndConditions;
