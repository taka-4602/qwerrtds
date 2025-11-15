// ランタイムでのChunkLoadError対策用。チャンク読み込みが失敗した場合に自動でハードリロードを1度だけ実行する。
// 注意: SW/キャッシュや古いビルドを参照している時に有効。無限リロードを避けるため1回のみ。

// クライアント側のみで実行
if (typeof window !== 'undefined') {
  // 1回だけ実行するためのフラグ
  const KEY = 'ozeu-chunk-reload-once';

  // Webpackのグローバルプロミス拒否を監視
  window.addEventListener('unhandledrejection', (event) => {
    const reason = event && (event as any).reason;
    const isChunkLoadError = reason && (
      reason.name === 'ChunkLoadError' ||
      (typeof reason.message === 'string' && reason.message.includes('Loading chunk'))
    );

    if (isChunkLoadError) {
      const already = sessionStorage.getItem(KEY);
      if (!already) {
        sessionStorage.setItem(KEY, '1');
        // baseUrl配下でのフルリロード
        window.location.reload();
      }
    }
  });

  // Service Workerがいる場合は更新チェックを促す
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then((regs) => {
      regs.forEach((reg) => {
        reg.update().catch(() => {});
      });
    }).catch(() => {});
  }
}
