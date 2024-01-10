"""test

Revision ID: efa21a4051dd
Revises: f98003ce1542
Create Date: 2023-12-18 11:14:09.921875

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'efa21a4051dd'
down_revision = 'f98003ce1542'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('user_status', sa.String(), server_default='NOT_CHOSEN', nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'user_status')
    # ### end Alembic commands ###
