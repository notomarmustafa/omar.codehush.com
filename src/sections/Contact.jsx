import TitleHeader from "../components/TitleHeader.jsx";
import {useRef, useState} from "react";
import ContentExperience from "../components/models/Content/ContentExperience.jsx";
import emailjs from '@emailjs/browser';
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.sendForm(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )

      setFormData({ name: '', email: '', message: '' });
    } catch(error) {
      console.log('EMAILJS ERROR,', error);
    } finally {
      setLoading(false);
    }

  };

    return (
        <section id="contact" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title={t("contact_title")}
                    sub={t("contact_sub")}
                />

                <div className="mt-16 grid-12-cols">
                  {/* Contact Form - Left Side */}
                  <div className="xl:col-span-5">
                    <div className="flex-center card-border rounded-xl p-10">
                      <form onSubmit={handleSubmit} className="w-full flex flex-col gap-7" ref={formRef}>
                        <div>
                          <label htmlFor="name">{t("contact_name_label")}</label>
                          <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder={t("contact_name_placeholder")}
                              value={formData.name}
                              onChange={handleChange}
                              required
                          />
                        </div>

                        <div>
                          <label htmlFor="email">{t("contact_email_label")}</label>
                          <input
                              type="email"
                              id="email"
                              name="email"
                              placeholder={t("contact_email_placeholder")}
                              value={formData.email}
                              onChange={handleChange}
                              required
                          />
                        </div>

                        <div>
                          <label htmlFor="message">{t("contact_message_label")}</label>
                          <textarea
                              id="message"
                              name="message"
                              rows="5"
                              placeholder={t("contact_message_placeholder")}
                              value={formData.message}
                              onChange={handleChange}
                              required
                          />
                        </div>

                        <button type="submit" disabled={loading}>
                          <div className="cta-button group">
                            <div className="bg-circle" />
                            <p className="text">{loading ? t("contact_button_sending"):t("contact_button_send")}</p>
                            <div className="arrow-wrapper">
                              <img src="/images/arrow-down.svg" alt="arrow" />
                            </div>
                          </div>
                        </button>
                      </form>
                    </div>
                  </div>

                  {/* 3D Experience - Right Side */}
                  <div className="xl:col-span-7 min-h-96">
                    <div className="w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden">
                      <ContentExperience />
                    </div>
                  </div>
                </div>
            </div>
        </section>
    )
}
export default Contact
