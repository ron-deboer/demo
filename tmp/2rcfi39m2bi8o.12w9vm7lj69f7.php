<style>
    .error {
        width: 75%;
        padding: 6rem;
        background: rgb(221, 68, 98);
        color: white;
        font-size: 3rem;
        margin: 4rem auto;
        text-align: center;
        font-weight: 900;
        font-size: 3rem;
    }
</style>
<div class="container">
    <div class="error">oops</div>

    <div class="center" style="font-size: 2rem; font-weight: 900">
        <?= ($this->raw($message))."
" ?>
    </div>
</div>
