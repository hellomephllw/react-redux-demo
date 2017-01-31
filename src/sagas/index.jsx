/**
 * Created by liliwen on 2017/1/31.
 */
'use strict';
import watchLoginAsync from './login';

export default function* rootSaga() {
    yield [
        watchLoginAsync()
    ];
}