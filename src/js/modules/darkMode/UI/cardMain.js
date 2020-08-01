//输入框
const InputMain = `
    .textarea-container {
      textarea {
        background-color: var(--dark-3)!important;
        border-color: var(--dark-3)!important;
        color: var(--dark-font-1)!important;
      }
      &:hover textarea, &.focus textarea {
        color: var(--dark-font-0)!important;
      }
    }
    
    .emoji-box {
      background: var(--dark-3)!important;
      border-color: var(--dark-3)!important;
      box-shadow: 0 11px 12px 0 var(--dark-1)!important;
      .emoji-text {
        color: var(--dark-font-3)!important;
      }
      .emoji-text:hover {
        background-color: var(--dark-5)!important;
      }
      .emoji-notice {
        background-color: var(--dark-3)!important;
        border-color: var(--dark-3)!important;
        color: var(--dark-font-3)!important;
      }
      .emoji-tabs {
        background: var(--dark-4)!important;
        .tab-link.on {
          background: var(--dark-3)!important;
        }
        .tab-link:hover {
          background: var(--dark-5)!important;
        }
        .emoji-tab-slider {
          .prev {
            background-image: url(https://static.hdslb.com/phoenix/dist/images/left-arrow.svg)!important;
          }
          .next {
            background-image: url(https://static.hdslb.com/phoenix/dist/images/right-arrow.svg)!important;
          }
          .prev.on {
            background-image: url(https://static.hdslb.com/phoenix/dist/images/left-arrow-disable.svg)!important;
          }
          .next.on {
            background-image: url(https://static.hdslb.com/phoenix/dist/images/right-arrow-disable.svg)!important;
          }
        }
      }
    }
  `;

//评论
const CommentMain = `
    .bb-comment {
      background-color: unset!important;
      .comment-header {
        border-color: var(--dark-2)!important;
        .tabs-order li {
          color: var(--dark-font-0);
        }
      }
      .comment-send .comment-emoji {
        border: 1px solid var(--dark-3);
        background-color: var(--dark-3);
      }
      .comment-list .list-item {
        .user-face .hot-follow .follow-btn.followed {
          background-color: var(--dark-5);
          color: var(--dark-font-2);
        }
        .con {
          border-color: var(--dark-1)!important;
          .user .name {
            color: var(--dark-font-1);
          }
          .text {
            color: var(--dark-font-0);
          }
          .info {
            .reply:hover {
              background: var(--dark-1);
            }
            .reply-tags span {
              background-color: var(--dark-1);
              color: var(--dark-font-1);
            }
            .operation .opera-list {
              background-color: var(--dark-3);
              color: var(--dark-font-0);
              li:hover {
                background-color: var(--dark-2);
              }
            }
          }
          .reply-box {
            .reply-item .reply-con {
              .user .text-con {
                color: var(--dark-font-0);
              }
              .info .reply:hover {
                background: var(--dark-1);
              }
            }
            .view-more {
              color: var(--dark-font-1);
              .btn-more:hover {
                background: var(--dark-1);
              }
            }
          }
          .paging-box {
            span.result, span.dian {
              color: var(--dark-font-1);
            }
            a.tcd-number, a.next, a.prev {
              color: var(--dark-font-1);
              &:hover {
                color: #00a1d6;
              }
            }
          }
        }
      }
      .bottom-page.center {
        border-color: var(--dark-2)!important;
      }
    }
  `;

//动态
const DynamicMain = `
    //文字
    .text-area .view-danmaku {
      color: var(--dark-font-2)!important;
    }
    
    .text-area .content {
      color: var(--dark-font-1)!important;
    }
    
    .text-area .title {
      color: var(--dark-font-0)!important;
    }
    
    //话题标签
    .new-topic-panel .tag-item .label {
      background: var(--dark-3)!important;
    }
    
    //关注的人点赞
    .like-users-panel::before {
      background: var(--dark-1)!important;
    }
    .like-users-panel {
      color: var(--dark-font-2)!important;
      .users-box {
        color: var(--dark-font-1)!important;
      }
    }
    .users-box .like-users-list:link, .users-box .like-users-list:visited {
      color: var(--dark-font-1);
    }
    
    //Card按钮
    .card .more-panel {
      background: var(--dark-3)!important;
      color: var(--dark-font-0)!important;
      border-color: var(--dark-3)!important;
      -webkit-box-shadow: 0 1px 12px 0 var(--dark-3)!important;
      box-shadow: 0 1px 12px 0 var(--dark-3)!important;
      &:after {
        background: var(--dark-3)!important;
        border-color: var(--dark-3)!important;
      }
    }
    
    //视频Card, 番剧Card, 文章Card
    .video-container, .bangumi-container, .article-container, .live-container {
      border-color: var(--dark-3)!important;
      background: var(--dark-card)!important;
    }
    
    //转发Card
    .repost {
      background: var(--dark-3)!important;
    }
    
    //图片预览Card
    .imagesbox .boost-control, .imagesbox .boost-img {
      background: var(--dark-3)!important;
    }
    
    //活动Card, 投票Card, 音乐Card
    .h5share-container, .vote-container, .music-container {
      border-color: var(--dark-3)!important;
    }
    
    //Card阴影
    .article-container:hover, .vote-container:hover, .h5share-container:hover, .music-container:hover {
      .text-area {
        -webkit-box-shadow: 0 3px 10px 0 var(--dark-1)!important;
        box-shadow: 0 3px 10px 0 var(--dark-1)!important;
      }
    }
    
    //相关作品
    .shop-panel {
      .shop-list {
        background: var(--dark-3)!important;
      }
    }
    
    //表情按钮
    .comm-emoji {
      border-color:  var(--dark-1)!important;
      background-color: var(--dark-1)!important;
    }
    
    //评论转发
    .panel-area {
      .forw-area {
        background-color: unset!important;
      }
      ${CommentMain}
    }
    
    //弹出框
    .bp-popup-panel {
      background: var(--dark-4)!important;
      .title-ctnr .popup-title, .popup-content-ctnr {
        color: var(--dark-font-0)!important;
      }
    }
    
    .dynamic-list-item-wrap, .forw-more {
      border-color: var(--dark-2)!important;
    }
    
    ${InputMain}
  `;

export {
    InputMain,
    CommentMain,
    DynamicMain,
}
