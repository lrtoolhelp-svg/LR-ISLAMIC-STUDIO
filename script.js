
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --navy: #0D1B2A;
  --navy-mid: #142233;
  --navy-light: #1E3050;
  --gold: #C9A84C;
  --gold-light: #E8C76A;
  --gold-dim: #8A6E2F;
  --ivory: #F5F0E8;
  --green: #2D6A4F;
  --charcoal: #1E2D3D;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  background:
    radial-gradient(circle at top, #172b43 0%, var(--navy) 45%, #08131f 100%);
  color: var(--ivory);
  font-family: "Noto Sans", sans-serif;
}

button,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

.top-header {
  width: 100%;
  max-width: 480px;
  margin: auto;
  padding: 18px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(201, 168, 76, .2);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-logo {
  width: 42px;
  height: 42px;
  border: 1px solid var(--gold);
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: var(--gold-light);
  font-size: 23px;
  box-shadow: 0 0 22px rgba(201, 168, 76, .18);
}

.brand h1 {
  font-family: "Amiri", serif;
  font-size: 22px;
  color: var(--gold-light);
}

.brand span {
  display: block;
  font-size: 10px;
  color: #aab5c1;
  letter-spacing: .7px;
}

.header-badge {
  border: 1px solid var(--gold-dim);
  color: var(--gold-light);
  padding: 5px 9px;
  border-radius: 20px;
  font-size: 11px;
}

.step-navigation {
  max-width: 480px;
  margin: auto;
  padding: 18px 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: #647487;
  min-width: 48px;
}

.step-item span {
  width: 29px;
  height: 29px;
  border-radius: 50%;
  border: 1px solid #435365;
  display: grid;
  place-items: center;
  font-size: 12px;
}

.step-item small {
  font-size: 9px;
}

.step-item.active {
  color: var(--gold-light);
}

.step-item.active span,
.step-item.done span {
  border-color: var(--gold);
  background: rgba(201, 168, 76, .12);
  color: var(--gold-light);
}

.step-line {
  width: 28px;
  height: 1px;
  background: #344556;
  margin: 0 3px 16px;
}

main {
  width: 100%;
  max-width: 480px;
  margin: auto;
  padding: 8px 16px 50px;
}

.step-panel {
  display: none;
  animation: fadeIn .35s ease;
}

.step-panel.active {
  display: block;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-heading {
  margin: 16px 0 22px;
}

.section-heading.small {
  margin-bottom: 12px;
}

.eyebrow {
  color: var(--gold);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
}

.section-heading h2 {
  margin-top: 7px;
  font-family: "Amiri", serif;
  font-size: 30px;
  line-height: 1.1;
}

.section-heading h3 {
  margin-top: 4px;
  font-family: "Amiri", serif;
  font-size: 22px;
}

.section-heading p {
  margin-top: 8px;
  color: #9eabb8;
  font-size: 13px;
  line-height: 1.6;
}

.content-type-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.content-card {
  min-height: 135px;
  padding: 15px 12px;
  border: 1px solid #304356;
  border-radius: 16px;
  background: rgba(20, 34, 51, .8);
  color: var(--ivory);
  text-align: left;
  transition: .2s ease;
}

.content-card:hover,
.content-card.selected {
  border-color: var(--gold);
  background: rgba(201, 168, 76, .08);
  transform: translateY(-2px);
}

.content-icon {
  display: block;
  color: var(--gold-light);
  font-size: 27px;
  margin-bottom: 12px;
}

.content-card strong {
  display: block;
  font-size: 13px;
}

.content-card small {
  display: block;
  margin-top: 5px;
  color: #8392a1;
  font-size: 10px;
}

.input-section,
.option-section {
  margin-top: 22px;
}

.input-section label,
.option-section label {
  display: block;
  margin-bottom: 9px;
  color: #c9d0d7;
  font-size: 12px;
  font-weight: 600;
}

textarea {
  width: 100%;
  border: 1px solid #34495c;
  border-radius: 13px;
  background: #101f2f;
  color: var(--ivory);
  outline: none;
  resize: vertical;
}

#topicInput {
  min-height: 105px;
  padding: 13px;
  line-height: 1.6;
}

textarea:focus {
  border-color: var(--gold);
  box-shadow: 0 0 0 3px rgba(201, 168, 76, .08);
}

.topic-chips {
  display: flex;
  gap: 7px;
  overflow-x: auto;
  margin-top: 9px;
  padding-bottom: 3px;
}

.topic-chip {
  flex: 0 0 auto;
  border: 1px solid #405366;
  border-radius: 20px;
  background: #142436;
  color: #c7d0d8;
  padding: 7px 10px;
  font-size: 10px;
}

.topic-chip:hover {
  border-color: var(--gold);
  color: var(--gold-light);
}

.language-row,
.duration-row {
  display: flex;
  gap: 8px;
}

.language-btn,
.duration-btn {
  flex: 1;
  padding: 11px 8px;
  border: 1px solid #35495c;
  border-radius: 10px;
  background: #142436;
  color: #aeb9c4;
}

.language-btn.selected,
.duration-btn.selected {
  border-color: var(--gold);
  color: var(--gold-light);
  background: rgba(201, 168, 76, .1);
}

.primary-btn,
.secondary-btn {
  width: 100%;
  min-height: 48px;
  border-radius: 12px;
  margin-top: 24px;
  font-weight: 700;
}

.primary-btn {
  border: 1px solid var(--gold);
  background: linear-gradient(135deg, #C9A84C, #9E7B2E);
  color: #101820;
  box-shadow: 0 8px 25px rgba(201, 168, 76, .16);
}

.primary-btn:hover {
  filter: brightness(1.08);
}

.secondary-btn {
  border: 1px solid #405366;
  background: #142436;
  color: var(--ivory);
}

.button-row {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 10px;
  margin-top: 25px;
}

.button-row .primary-btn,
.button-row .secondary-btn {
  margin-top: 0;
}

.full {
  width: 100%;
}

.format-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.format-card {
  border: 1px solid #34495c;
  border-radius: 16px;
  padding: 15px;
  background: #142436;
  color: var(--ivory);
  text-align: left;
}

.format-card.selected {
  border-color: var(--gold);
  background: rgba(201, 168, 76, .08);
}

.format-preview {
  margin: 0 auto 12px;
  display: grid;
  place-items: center;
  border: 1px solid var(--gold-dim);
  color: var(--gold-light);
  background: #0d1b2a;
  font-size: 12px;
}

.format-preview.vertical {
  width: 55px;
  height: 82px;
}

.format-preview.horizontal {
  width: 100px;
  height: 60px;
}

.format-card strong,
.format-card small {
  display: block;
}

.format-card strong {
  font-size: 13px;
}

.format-card small {
  color: #81909f;
  font-size: 10px;
  margin-top: 4px;
}

.style-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.style-card {
  min-height: 95px;
  border: 1px solid #34495c;
  border-radius: 14px;
  background: #142436;
  color: var(--ivory);
}

.style-card.selected {
  border-color: var(--gold);
  background: rgba(201, 168, 76, .08);
}

.style-card span {
  display: block;
  color: var(--gold-light);
  font-family: "Amiri", serif;
  font-size: 27px;
  margin-bottom: 5px;
}

.style-card strong {
  font-size: 11px;
}

.generation-container {
  text-align: center;
  padding-top: 30px;
}

.mandala {
  width: 125px;
  height: 125px;
  margin: 10px auto 25px;
  border-radius: 50%;
  border: 1px solid var(--gold);
  display: grid;
  place-items: center;
  position: relative;
  animation: spin 12s linear infinite;
  background:
    repeating-conic-gradient(
      from 0deg,
      rgba(201,168,76,.18) 0deg 12deg,
      transparent 12deg 24deg
    );
}

.mandala::before,
.mandala::after {
  content: "";
  position: absolute;
  inset: 14px;
  border: 1px solid var(--gold-dim);
  transform: rotate(45deg);
}

.mandala::after {
  transform: rotate(22.5deg);
}

.mandala-inner {
  position: relative;
  z-index: 2;
  color: var(--gold-light);
  font-size: 34px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.generation-container h2 {
  margin: 8px 0;
  font-family: "Amiri", serif;
  font-size: 27px;
}

.generation-description {
  color: #8998a7;
  font-size: 12px;
}

.progress-wrapper {
  margin: 30px 0 20px;
  text-align: left;
}

.progress-info {
  display: flex;
  justify-content: space-between;
  color: #aeb9c4;
  font-size: 11px;
  margin-bottom: 8px;
}

.progress-info strong {
  color: var(--gold-light);
}

.progress-track {
  height: 7px;
  border-radius: 10px;
  background: #26394b;
  overflow: hidden;
}

.progress-bar {
  width: 0%;
  height: 100%;
  background: linear-gradient(
    90deg,
    var(--gold-dim),
    var(--gold-light)
  );
  transition: width .4s ease;
}

.generation-list {
  text-align: left;
}

.generation-step {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255,255,255,.05);
  color: #657586;
}

.generation-step > span {
  width: 30px;
  height: 30px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  border: 1px solid #334758;
  font-size: 9px;
}

.generation-step strong,
.generation-step small {
  display: block;
}

.generation-step strong {
  font-size: 11px;
}

.generation-step small {
  color: #607182;
  margin-top: 3px;
  font-size: 9px;
}

.generation-step.active,
.generation-step.done {
  color: var(--ivory);
}

.generation-step.active > span,
.generation-step.done > span {
  border-color: var(--gold);
  color: var(--gold-light);
}

.preview-wrapper {
  border-radius: 17px;
  overflow: hidden;
  background: #09131f;
  border: 1px solid #34495c;
}

.video-preview {
  width: 100%;
  min-height: 300px;
  display: flex;
  align-items: stretch;
  justify-content: center;
}

.preview-placeholder {
  display: grid;
  place-items: center;
  width: 100%;
  min-height: 300px;
  color: #68798a;
}

.lr-preview-scene {
  width: 100%;
  min-height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    radial-gradient(
      circle at center,
      #243d57,
      #0D1B2A 65%
    );
}

.lr-preview-scene::before,
.lr-preview-scene::after {
  content: "";
  position: absolute;
  width: 180px;
  height: 180px;
  border: 1px solid rgba(201,168,76,.25);
  transform: rotate(45deg);
}

.lr-preview-scene::before {
  top: -80px;
  left: -80px;
}

.lr-preview-scene::after {
  right: -80px;
  bottom: -80px;
}

.lr-preview-content {
  position: relative;
  z-index: 3;
  padding: 25px;
  text-align: center;
}

.lr-preview-label {
  color: var(--gold);
  font-size: 9px;
  letter-spacing: 2px;
  margin-bottom: 15px;
}

.lr-preview-content h2 {
  font-family: "Amiri", serif;
  color: var(--ivory);
  font-size: 27px;
  line-height: 1.25;
}

.lr-preview-content p {
  margin-top: 12px;
  color: var(--gold-light);
  font-size: 12px;
}

.lr-preview-source {
  margin-top: 22px;
  color: #aab6c1;
  font-size: 9px;
}

.lr-moon {
  position: absolute;
  top: 20px;
  right: 25px;
  color: var(--gold-light);
  font-size: 38px;
}

.preview-controls {
  height: 55px;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 13px;
  background: #101d2a;
}

.play-btn {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid var(--gold-dim);
  background: #182a3c;
  color: var(--gold-light);
}

.timeline {
  flex: 1;
  height: 5px;
  border-radius: 10px;
  background: #344758;
  overflow: hidden;
}

.timeline-progress {
  width: 0%;
  height: 100%;
  background: var(--gold);
  transition: width .1s linear;
}

.script-section,
.export-section {
  margin-top: 30px;
}

.script-box textarea {
  min-height: 220px;
  padding: 14px;
  font-size: 12px;
  line-height: 1.65;
}

.secondary-btn.full {
  margin-top: 10px;
}

.export-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.export-card {
  min-height: 110px;
  border: 1px solid #34495c;
  border-radius: 14px;
  background: #142436;
  color: var(--ivory);
}

.export-card:hover {
  border-color: var(--gold);
}

.export-card span {
  display: block;
  font-size: 24px;
  margin-bottom: 8px;
}

.export-card strong,
.export-card small {
  display: block;
}

.export-card strong {
  font-size: 12px;
}

.export-card small {
  color: #7e8d9c;
  margin-top: 4px;
  font-size: 9px;
}

.toast {
  position: fixed;
  left: 50%;
  bottom: 25px;
  transform: translate(-50%, 20px);
  opacity: 0;
  pointer-events: none;
  z-index: 9999;
  padding: 11px 16px;
  border: 1px solid var(--gold-dim);
  border-radius: 10px;
  background: #101f2e;
  color: var(--ivory);
  font-size: 11px;
  transition: .25s ease;
  box-shadow: 0 8px 30px rgba(0,0,0,.35);
}

.toast.show {
  opacity: 1;
  transform: translate(-50%, 0);
}

@media (min-width: 700px) {

  .top-header,
  .step-navigation,
  main {
    max-width: 760px;
  }

  main {
    padding-left: 25px;
    padding-right: 25px;
  }

  .content-type-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .content-card {
    min-height: 155px;
  }

}

@media (prefers-reduced-motion: reduce) {

  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: .01ms !important;
  }

}
