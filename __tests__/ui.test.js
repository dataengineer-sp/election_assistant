const fs = require('fs');
const path = require('path');

// Load HTML for DOM testing
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

/**
 * UI integration tests for ElectED application.
 * Verifies that all critical structural HTML elements are present and accessible.
 */
describe('ElectED — HTML Structure & Accessibility', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html;
    });

    // --- Header & Navigation ---
    test('Header element is present with banner role', () => {
        expect(document.querySelector('header[role="banner"]')).toBeTruthy();
    });

    test('Logo link exists with aria-label', () => {
        const logo = document.querySelector('a.logo[aria-label="ElectED Home"]');
        expect(logo).toBeTruthy();
    });

    test('Navigation contains 3 links', () => {
        const links = document.querySelectorAll('nav[role="navigation"] a');
        expect(links.length).toBe(3);
    });

    test('Navigation link text is correct', () => {
        const links = Array.from(document.querySelectorAll('nav[role="navigation"] a'));
        const linkTexts = links.map(l => l.textContent.trim());
        expect(linkTexts).toContain('Guide');
        expect(linkTexts).toContain('Ask AI');
        expect(linkTexts).toContain('Reference');
    });

    // --- Main content sections ---
    test('Main content area has correct id', () => {
        expect(document.getElementById('main-content')).toBeTruthy();
    });

    test('Guide section exists with correct aria label', () => {
        const section = document.getElementById('guide');
        expect(section).toBeTruthy();
        expect(section.getAttribute('aria-labelledby')).toBe('guide-title');
    });

    test('Ask AI section exists', () => {
        expect(document.getElementById('ask')).toBeTruthy();
    });

    test('Reference section exists', () => {
        expect(document.getElementById('reference')).toBeTruthy();
    });

    // --- Interactive Guide elements ---
    test('Progress track is present with progressbar role', () => {
        const track = document.getElementById('progressTrack');
        expect(track).toBeTruthy();
        expect(track.getAttribute('role')).toBe('progressbar');
    });

    test('Stage navigation container exists', () => {
        expect(document.getElementById('stageNav')).toBeTruthy();
    });

    test('Content panel exists with tabpanel role', () => {
        const panel = document.getElementById('contentPanel');
        expect(panel).toBeTruthy();
        expect(panel.getAttribute('role')).toBe('tabpanel');
    });

    // --- Chat / AI section ---
    test('Chat message log exists with aria-live', () => {
        const log = document.getElementById('chatMessages');
        expect(log).toBeTruthy();
        expect(log.getAttribute('aria-live')).toBe('polite');
    });

    test('Chat input textarea exists with maxlength', () => {
        const textarea = document.getElementById('chatInput');
        expect(textarea).toBeTruthy();
        expect(textarea.getAttribute('maxlength')).toBe('1000');
    });

    test('Send button exists and has aria-label', () => {
        const btn = document.getElementById('sendBtn');
        expect(btn).toBeTruthy();
        expect(btn.getAttribute('aria-label')).toBe('Send message');
    });

    // --- API Key form security ---
    test('API key form uses POST-safe method (form submit, not GET)', () => {
        const form = document.getElementById('apiKeyBar');
        expect(form).toBeTruthy();
        expect(form.tagName).toBe('FORM');
    });

    test('API key input is of type password', () => {
        const input = document.getElementById('apiKeyInput');
        expect(input).toBeTruthy();
        expect(input.getAttribute('type')).toBe('password');
    });

    test('API key input has a maxlength for security', () => {
        const input = document.getElementById('apiKeyInput');
        expect(input.getAttribute('maxlength')).toBe('60');
    });

    // --- External scripts & stylesheets ---
    test('External stylesheet link is present', () => {
        const link = document.querySelector('link[rel="stylesheet"][href="style.css"]');
        expect(link).toBeTruthy();
    });

    test('External script is present', () => {
        const script = document.querySelector('script[src="script.js"]');
        expect(script).toBeTruthy();
    });

    // --- Accessibility ---
    test('Skip link exists for keyboard users', () => {
        const skip = document.querySelector('a.skip-link');
        expect(skip).toBeTruthy();
        expect(skip.getAttribute('href')).toBe('#main-content');
    });

    test('Footer has contentinfo role', () => {
        const footer = document.querySelector('footer[role="contentinfo"]');
        expect(footer).toBeTruthy();
    });

    test('Hero section has a single h1', () => {
        const h1s = document.querySelectorAll('h1');
        expect(h1s.length).toBe(1);
    });

    test('All external links use rel=noopener', () => {
        const externalLinks = Array.from(document.querySelectorAll('a[target="_blank"]'));
        externalLinks.forEach(link => {
            expect(link.getAttribute('rel')).toMatch(/noopener/);
        });
    });
});
