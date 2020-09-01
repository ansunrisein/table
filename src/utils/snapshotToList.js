export const snapshotToList = snapshot => (
    snapshot && snapshot.map(e => ({...e.val(), id: e.key}))
)