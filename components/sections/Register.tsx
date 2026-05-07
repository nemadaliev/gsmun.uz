'use client';

import { useState, FormEvent } from 'react';
import { useReveal } from '@/lib/useReveal';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  age: string;
  phone: string;
  school: string;
  committee: string;
  experience: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialForm: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  age: '',
  phone: '',
  school: '',
  committee: '',
  experience: '',
};

export default function Register() {
  useReveal();

  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [message, setMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = 'Required';
    if (!form.lastName.trim()) newErrors.lastName = 'Required';
    if (!form.email.trim()) newErrors.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Invalid email';
    if (!form.age) newErrors.age = 'Required';
    else {
      const age = parseInt(form.age, 10);
      if (isNaN(age) || age < 10 || age > 25)
        newErrors.age = 'Age must be 10–25';
    }
    if (!form.phone.trim()) newErrors.phone = 'Required';
    if (!form.school.trim()) newErrors.school = 'Required';
    if (!form.committee) newErrors.committee = 'Please select';
    if (!form.experience) newErrors.experience = 'Please select';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    setMessage('');

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Submission failed');
      }

      setStatus('success');
      setMessage(
        'Application received! Check your email within 24 hours for payment instructions.'
      );
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setMessage(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      );
    }
  };

  return (
    <section id="register" className="register">
      <div className="container register-content">
        <div className="register-left reveal">
          <div className="section-num">— 04</div>
          <h2 className="section-title" style={{ marginTop: '8px' }}>
            Reserve your
            <br />
            <span className="italic">delegation.</span>
          </h2>
          <div className="price-tag">
            <span className="price">120,000</span>
            <span className="currency">UZS · ONE-TIME FEE</span>
          </div>
          <ul className="price-includes">
            <li>Full conference access (09:00 — 21:00)</li>
            <li>Lunch, dinner, and refreshments included</li>
            <li>Official delegate badge and conference materials</li>
            <li>Signed certificate of participation</li>
            <li>Eligibility for all delegate awards</li>
            <li>Access to chairs&apos; position-paper feedback</li>
          </ul>
          <p
            style={{
              color: 'var(--muted)',
              fontSize: '13px',
              fontFamily: 'var(--mono)',
              letterSpacing: '0.05em',
            }}
          >
            Seats are allocated on a first-come, first-served basis. Confirm
            registration early — committees fill quickly.
          </p>
        </div>

        <form className="register-form reveal" onSubmit={handleSubmit} noValidate>
          <h3>Delegate Application</h3>
          <p className="form-sub">
            Takes about 90 seconds. We&apos;ll email confirmation within 24 hours.
          </p>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                value={form.firstName}
                onChange={handleChange}
                placeholder="Aziza"
                className={errors.firstName ? 'error' : ''}
              />
              {errors.firstName && (
                <div className="form-error">{errors.firstName}</div>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                value={form.lastName}
                onChange={handleChange}
                placeholder="Karimova"
                className={errors.lastName ? 'error' : ''}
              />
              {errors.lastName && (
                <div className="form-error">{errors.lastName}</div>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <div className="form-error">{errors.email}</div>}
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                id="age"
                name="age"
                type="number"
                min="10"
                max="25"
                value={form.age}
                onChange={handleChange}
                placeholder="17"
                className={errors.age ? 'error' : ''}
              />
              {errors.age && <div className="form-error">{errors.age}</div>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="+998 90 000 00 00"
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && (
                <div className="form-error">{errors.phone}</div>
              )}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="school">School / University</label>
            <input
              id="school"
              name="school"
              type="text"
              value={form.school}
              onChange={handleChange}
              placeholder="e.g. Westminster IUT"
              className={errors.school ? 'error' : ''}
            />
            {errors.school && (
              <div className="form-error">{errors.school}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="committee">Preferred committee</label>
            <select
              id="committee"
              name="committee"
              value={form.committee}
              onChange={handleChange}
              className={errors.committee ? 'error' : ''}
            >
              <option value="">Select a committee</option>
              <option value="UNGA">General Assembly (UNGA)</option>
              <option value="UNSC">Security Council (UNSC)</option>
              <option value="ECOSOC">ECOSOC</option>
              <option value="UNHRC">Human Rights Council</option>
              <option value="UNICEF">UNICEF (ages 10–14)</option>
              <option value="WHO">World Health Organization</option>
              <option value="any">No preference — assign me</option>
            </select>
            {errors.committee && (
              <div className="form-error">{errors.committee}</div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="experience">MUN experience</label>
            <select
              id="experience"
              name="experience"
              value={form.experience}
              onChange={handleChange}
              className={errors.experience ? 'error' : ''}
            >
              <option value="">Select level</option>
              <option value="first">First-time delegate</option>
              <option value="1-2">1–2 conferences</option>
              <option value="3-5">3–5 conferences</option>
              <option value="6+">6+ conferences</option>
            </select>
            {errors.experience && (
              <div className="form-error">{errors.experience}</div>
            )}
          </div>
          <button
            type="submit"
            className={`form-submit${status === 'success' ? ' success' : ''}`}
            disabled={status === 'submitting' || status === 'success'}
          >
            {status === 'submitting'
              ? 'Submitting…'
              : status === 'success'
                ? '✓ Application received'
                : 'Submit application →'}
          </button>
          {message && (
            <div
              className={`form-message ${status === 'success' ? 'success' : 'error'}`}
            >
              {message}
            </div>
          )}
          {!message && (
            <p className="form-note">
              Payment instructions will be sent on confirmation
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
