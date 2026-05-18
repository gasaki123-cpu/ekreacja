// ─────────────────────────────────────────────────────────────────
// PASSWORD GATE CONFIG
// ─────────────────────────────────────────────────────────────────
//
// To change the password:
//   1. Pick a new password (e.g. "MySecretPass123")
//   2. Compute its SHA-256 hash. Easiest options:
//      - PowerShell:
//          $b=[Text.Encoding]::UTF8.GetBytes('MySecretPass123')
//          $h=[Security.Cryptography.SHA256]::Create().ComputeHash($b)
//          ($h|%{$_.ToString('x2')}) -join ''
//      - Node:
//          require('crypto').createHash('sha256').update('MySecretPass123').digest('hex')
//      - Online: any "sha256 hash" tool, paste password
//   3. Replace AUTH_HASH below with the resulting hex string
//   4. Save → redeploy
//
// Current password: ekreacja2026  (CHANGE BEFORE SHARING)
// ─────────────────────────────────────────────────────────────────

export const AUTH_HASH = '3c4a379d67a361fddc623891796189b01e84af10b93321339caf6cb5e73368e0';
